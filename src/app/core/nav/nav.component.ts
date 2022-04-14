import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models';
import { AuthService } from '../services';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    get currentUser$(): Observable<IUser | undefined> {
        return this.authService.currentUser$;
    }

    get isLoggedIn$(): Observable<boolean> {
        return this.authService.isLoggedIn$;
    }

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    logoutHandler() {
        this.authService.logout$()
            .subscribe({
                complete: () => {
                    this.router.navigate(['/home']);
                },
                error: (err) => {
                    console.log(err);
                    this.router.navigate(['/home']);
                }
            })
    }

}