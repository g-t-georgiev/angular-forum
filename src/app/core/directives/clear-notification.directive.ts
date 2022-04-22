import { Directive, OnInit, OnDestroy, Input } from '@angular/core';
import { MessageBus } from '../services';

@Directive({
    selector: '[clearNotification]'
})
export class ClearNotificationDirective implements OnInit, OnDestroy {

    private timerId: any;
    @Input('clearNotification') clearInterval: number = 5e3;

    constructor(
        private messageBusService: MessageBus.MessageBusService
    ) { }

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