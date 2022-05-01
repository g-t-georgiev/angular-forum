import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../../shared/models';
import { AuthService, MessageBus } from '../services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private isLoggingOut: boolean = false;

    readonly notificationTypes = MessageBus.MessageTypes;
    notifications$!: Observable<MessageBus.Message[] | []>;
    
    get hasNotifications$(): Observable<boolean> {
        return this.messageBusService.hasMessages$;
    }

    get currentUser$(): Observable<IUser | undefined> {
        return this.authService.currentUser$;
    }

    get isLoggedIn$(): Observable<boolean> {
        return this.authService.isLoggedIn$;
    }

    constructor(
        private authService: AuthService,
        private router: Router,
        private messageBusService: MessageBus.MessageBusService
    ) { }

    ngOnInit(): void {
        this.notifications$ = this.messageBusService.onNewMessage$;
    }

    logoutHandler(ev: Event) {
        ev.preventDefault();

        if (this.isLoggingOut) {
            return;
        }

        this.isLoggingOut = true;

        this.authService.logout$()
            .subscribe({
                complete: () => {
                    this.isLoggingOut = false;
                    this.router.navigate(['/home']);
                },
                error: (err) => {
                    console.log(err);
                    this.isLoggingOut = false;
                    this.router.navigate(['/home']);
                }
            })
    }

    pin(index: number) {
        this.messageBusService.pin(index);
    }

    dismiss(index: number) {
        this.messageBusService.clear(index);
    }

}