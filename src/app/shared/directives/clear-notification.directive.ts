import { Directive, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { MessageBus } from '../../core/services';

@Directive({
    selector: '[clearNotification]'
})
export class ClearNotificationDirective implements OnInit, OnChanges, OnDestroy {


    private timerId: any;
    private clearInterval: number;

    @Input('clearNotification') cancelTimer: boolean;
    @Input('notificationIndex') notificationIndex!: number;

    constructor(
        private messageBusService: MessageBus.MessageBusService
    ) {
        this.clearInterval = 5e3;
        this.cancelTimer = false;
    }

    ngOnInit(): void {
        this.timerId = setTimeout(
            () => {
                this.messageBusService.clear(this.notificationIndex);
            },
            this.clearInterval
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        const { cancelTimer } = changes;
        
        if (cancelTimer?.currentValue) {
            clearTimeout(this.timerId);
            return;
        }

    }

    ngOnDestroy(): void {
        clearTimeout(this.timerId);
    }

}