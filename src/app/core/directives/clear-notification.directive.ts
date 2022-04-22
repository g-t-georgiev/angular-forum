import { Directive, OnInit, OnDestroy, Input } from '@angular/core';
import { MessageBus } from '../services';

@Directive({
    selector: '[clearNotification]'
})
export class ClearNotificationDirective implements OnInit, OnDestroy {

    @Input('clearNotification') clearInterval!: string;

    private timerId: any;
    private _clearInterval!: number;

    constructor(
        private messageBusService: MessageBus.MessageBusService
    ) { }

    ngOnInit(): void {
        this._clearInterval = isNaN(+this.clearInterval) ? 5e3 : +this.clearInterval * 1e3;
        // console.log(this._clearInterval);

        this.timerId = setTimeout(
            () => {
                this.messageBusService.clear();
            },
            this._clearInterval
        );
    }

    ngOnDestroy(): void {
        clearTimeout(this.timerId);
    }

}