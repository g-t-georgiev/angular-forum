import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';



export enum MessageTypes {
    Success = 'success',
    Error = 'error'
}

export class Message {

    constructor(
        public type: MessageTypes,
        public text: string,
        public pinned: boolean = false
    ) { }

}

@Injectable()
export class MessageBusService {

    private messageQueue: BehaviorSubject<Message[] | []>;
    onNewMessage$: Observable<Message[] | []>;
    
    
    get hasMessages$(): Observable<boolean> {
        return of(this.messageQueue.getValue().length > 0);
    }

    constructor() {
        this.messageQueue = new BehaviorSubject<Message[] | []>([]);
        this.onNewMessage$ = this.messageQueue.asObservable();
    }

    private filterMessagesByIndex(index: number): Message[] | [] {
        const newState = this.messageQueue.value.filter(
            (_: Message, i: number): boolean => {
                return i !== index;
            }
        );

        // console.log(newState);

        return newState;
    }

    private filterMessagesByPinnedStatus(): Message[] | [] {
        const newState = this.messageQueue.value.filter(
            (message: Message, i: number, messages: Message[]): boolean => {
                return message.pinned;
            }
        );

        // console.log(newState);

        return newState;
    }

    private addNewMessage(...messages: Message[]): Message[] {
        const newState = [
            ...this.messageQueue.value,
            ...messages
        ];

        return newState;
    }

    notify(...messages: Message[]): void {
        this.messageQueue.next(this.addNewMessage(...messages));
    }

    clear(index?: number): void {
        if (index === undefined) {
            // if notification index not passed
            // clear all notifications, except for pinned ones
            this.messageQueue.next(this.filterMessagesByPinnedStatus());
            return;
        }

        this.messageQueue.next(this.filterMessagesByIndex(index));

    }

    pin(index: number): void {
        const newState = this.messageQueue.value.map(
            (message: Message, i: number, messages: Message[]) => {
                if (i === index) {
                    message.pinned = true;
                }

                return message;
            }
        );

        // console.log(newState);

        this.messageQueue.next(newState);
    }

}