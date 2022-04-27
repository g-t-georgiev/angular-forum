import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';



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

    private messageQueue: Message[] | [] = [];

    onNewMessage$: Observable<Message[] | []> = of(this.messageQueue);

    private filterMessagesByIndex(index: number): Message[] | [] {
        return this.messageQueue.filter(
            (_: Message, i: number) => {
                return i !== index;
            }
        );
    }

    private addNewMessage(...messages: Message[]): Message[] {
        return [
            ...this.messageQueue,
            ...messages
        ];
    }

    notify(...messages: Message[]): void {
        this.messageQueue = this.addNewMessage(...messages);
    }

    clear(index?: number): void {
        if (index) {
            this.messageQueue = this.filterMessagesByIndex(index);
        }

        this.messageQueue = [];
    }

}