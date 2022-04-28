import { TestBed } from '@angular/core/testing';

import { ClearNotificationDirective } from './clear-notification.directive';
import { MessageBus } from '../services';

describe('ClearNotificationDirective', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            MessageBus.MessageBusService
        ]
    }));

    it('should create an instance', () => {
        const messageService: MessageBus.MessageBusService = TestBed.inject(MessageBus.MessageBusService);
        const directive: ClearNotificationDirective = new ClearNotificationDirective(messageService);
        expect(directive).toBeTruthy();
    });
});