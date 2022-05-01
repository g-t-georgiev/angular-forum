import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../../shared/models';
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

    login$(userData: { email: string; password: string }): Observable<{ user: IUser, message: string }> {
        return this
            .http
            .post<{ user: IUser, message: string }>(`${apiUrl}/login`, userData);
    }

    register$(userData: { username: string; email: string; imageUrl: string; password: string; repeatPassword: string }): Observable<{ message: string }> {
        return this
            .http
            .post<{ message: string }>(`${apiUrl}/register`, userData);
    }

    logout$(): Observable<{ message: string }> {
        return this
            .http
            .delete<{ message: string }>(`${apiUrl}/logout`);
    }

    authenticate$(): Observable<{ message: string, user?: IUser }> {
        return this
            .http
            .get<{ message: string, user?: IUser }>(`${apiUrl}/users/auth`)
            .pipe(
                tap(({ user }) => {
                    if (user) {
                        this.handleLogin(user);
                    }
                }),
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