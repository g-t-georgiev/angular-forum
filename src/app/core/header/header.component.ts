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
    notification$!: Observable<MessageBus.Message[] | []>;

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
        this.notification$ = this.messageBusService.onNewMessage$;
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
                    this.messageBusService.notify(
                        new MessageBus.Message(
                            MessageBus.MessageTypes.Success, 
                            'Logout successful!'
                        )
                    );
                    this.router.navigate(['/home']);
                },
                error: (err) => {
                    console.log(err);
                    this.isLoggingOut = false;
                    this.messageBusService.notify(
                        new MessageBus.Message(
                            MessageBus.MessageTypes.Error, 
                            err.error.message ?? 'Something went wrong.'
                        )
                    );
                    this.router.navigate(['/home']);
                }
            })
    }

    private __notificationOffsetTopCSSVarName: string = 'var(--notification-offset-top)';
    private __notificationSizeYCSSVarName: string = 'var(--notification-size-Y)';
    calcNotificationsOffset(index: number): string {
        return `
            calc(${this.__notificationOffsetTopCSSVarName} + (${this.__notificationSizeYCSSVarName} * ${(index + 1)}))
        `.trim();
    }

    pin(index: number) {
        this.messageBusService.pin(index);
    }

    dismiss(index: number) {
        this.messageBusService.clear(index);
    }

    // generate notification manually
    // for testing only
    
    // showNotification(text: string, type: string) {

    //     const notification = new MessageBus.Message(
    //         type === 'success' 
    //         ? MessageBus.MessageTypes.Success
    //         : MessageBus.MessageTypes.Error, 
    //         text
    //     );
    //     this.messageBusService.notify(notification);
    // }

}