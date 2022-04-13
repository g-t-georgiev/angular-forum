import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../models';
import { environment } from 'src/environments/environment';


const apiUrl = environment.apiUrl;

@Injectable()
export class AuthService {

    private _currentUser = new BehaviorSubject<IUser | undefined>(undefined);

    get currentUser$(): Observable<IUser | undefined> {
        return this
            ._currentUser
            .asObservable();
    }

    get isLoggedIn$(): Observable<boolean> {
        return this
            .currentUser$
            .pipe(
                map(user => !!user)
            );
    }

    constructor(
        private http: HttpClient
    ) { }

    login$(userData: { email: string; password: string }): Observable<IUser> {
        return this
            .http
            .post<IUser>(`${apiUrl}/users/login`, userData);
    }

    register$(userData: { username: string; email: string; password: string; repeatPassword: string }): Observable<IUser> {
        return this
            .http
            .post<IUser>(`${apiUrl}/users/register`, userData);
    }

    logout$(): Observable<void> {
        return this
            .http
            .delete<void>(`${apiUrl}/users/logout`);
    }

    authenticate$(): Observable<IUser> {
        return this
            .http
            .get<IUser>(`${apiUrl}/users/profile`)
            .pipe(
                tap(user => this.handleLogin(user)),
                catchError((err) => {
                    // console.log(err);
                    return EMPTY;
                })
            );
    }

    handleLogin(user: IUser): void {
        this._currentUser.next(user);
    }

    handleLogout(): void {
        this._currentUser.next(undefined);
    }
}