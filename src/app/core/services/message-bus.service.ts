import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';



export enum MessageTypes {
    Success = 'success',
    Error = 'error'
}

export type Message = {
    type: 'success' | 'error';
    text: string
}

interface Descriptor {
    enumarable?: boolean;
    writable: boolean;
    configurable: boolean;
    value?: any
}

@Injectable()
export class MessageBusService {

    private messageQueue: BehaviorSubject<Message[] | []>;
    onNewMessage$: Observable<Message[] | []>;

    constructor() {
        this.messageQueue = new BehaviorSubject<Message[] | []>([]);
        this.onNewMessage$ = this.messageQueue.asObservable();
    }

    private filterMessagesByIndex(index: number): Message[] | [] {
        return this.messageQueue.value.filter(
            (_: Message, i: number): boolean => {
                return i !== index;
            }
        );
    }

    private filterNonPinnedMessages(): Message[] | [] {
        const pinnedMessages = this.messageQueue.value.filter(
            (_: Message, i: number, messages: Message[]): boolean => {
                const currentPropDescriptor: Descriptor = Object.getOwnPropertyDescriptor(
                    messages,
                    i.toString()
                ) as Descriptor;

                console.log(currentPropDescriptor);

                return !(currentPropDescriptor.writable || currentPropDescriptor.configurable);
            }
        );

        console.log(pinnedMessages);

        return pinnedMessages;
    }

    private addNewMessage(...messages: Message[]): Message[] {
        
        return [
            ...this.messageQueue.value,
            ...messages
        ];
    }

    notify(...messages: Message[]): void {
        this.messageQueue.next(this.addNewMessage(...messages));
    }

    clear(index?: number): void {
        if (index) {
            this.messageQueue.next(this.filterMessagesByIndex(index));
        }

        this.messageQueue.next(this.filterNonPinnedMessages());
    }

    pin(index: number): void {
        const arr = this.messageQueue.value;

        Object.defineProperty(
            arr, 
            index.toString(), 
            { 
                writable: false, 
                configurable: false 
            } as Descriptor
        );

        this.messageQueue.next(arr);
    }

}