import { Directive, OnInit, OnDestroy } from '@angular/core';
import { MessageBus } from '../services';

@Directive({
    selector: '[clearNotification]'
})
export class ClearNotificationDirective implements OnInit, OnDestroy {

    private timerId: any;
    private clearInterval: number;

    constructor(
        private messageBusService: MessageBus.MessageBusService
    ) {
        this.clearInterval = 5e3;
    }

    ngOnInit(): void {
        this.timerId = setTimeout(
            () => {
                this.messageBusService.clear();
            },
            this.clearInterval
        );
    }

    ngOnDestroy(): void {
        clearTimeout(this.timerId);
    }

}