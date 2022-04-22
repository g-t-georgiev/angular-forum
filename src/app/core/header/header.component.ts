import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '../models';
import { AuthService, MessageBus } from '../services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    private respMsgSubscription!: Subscription;
    private timerId!: ReturnType<typeof setTimeout>;
    private isLogginOut: boolean = false;

    notification: string = '';
    isErrorMsg: boolean = false;

    get currentUser$(): Observable<IUser | undefined> {
        return this.authService.currentUser$;
    }

    get isLoggedIn$(): Observable<boolean> {
        return this.authService.isLoggedIn$;
    }

    constructor(
        private authService: AuthService,
        private router: Router,
        private messageService: MessageBus.MessageBusService
    ) { }

    ngOnInit(): void {
        this.respMsgSubscription = this.messageService.onNewMessage$
            .subscribe({
                next: (message) => {
                    this.notification = message?.text ?? '';
                    this.isErrorMsg = message?.type === MessageBus.MessageTypes.Error;

                    if (this.notification) {
                        this.timerId = setTimeout(() => {
                            this.messageService.clear();
                        }, 5e3);
                    }
                }
            });
    }

    ngOnDestroy(): void {
        this.respMsgSubscription?.unsubscribe();

        if (this.timerId) {
            clearTimeout(this.timerId);
        }
    }

    logoutHandler(ev: Event) {
        ev.preventDefault();

        if (this.isLogginOut) {
            return;
        }

        this.isLogginOut = true;

        this.authService.logout$()
            .subscribe({
                complete: () => {
                    this.isLogginOut = false;
                    this.messageService.notify({ text: 'Logout successful!', type: 'success' });
                    this.router.navigate(['/home']);
                },
                error: (err) => {
                    console.log(err);
                    this.isLogginOut = false;
                    this.messageService.notify({ text: err.error.message ?? 'Something went wrong.', type: 'error' });
                    this.router.navigate(['/home']);
                }
            })
    }

    toggleNotification() {
        this.messageService.clear();
    }

}