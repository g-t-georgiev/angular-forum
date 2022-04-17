import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



export enum MessageTypes {
    Success = 'success',
    Error = 'error'
}

export type Message = {
    type: 'success' | 'error';
    text: string
}

@Injectable()
export class MessageBusService {

    constructor() { }

    private messageQueue = new Subject<Message | undefined>();

    onNewMessage$: Observable<Message | undefined> = this.messageQueue.asObservable();

    notify(message: Message): void {
        this.messageQueue.next(message);
    }

    clear(): void {
        this.messageQueue.next(undefined);
    }

}