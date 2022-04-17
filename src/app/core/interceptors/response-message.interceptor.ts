import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageBus } from '../services';

@Injectable()
export class ResponseMessageInterceptor implements HttpInterceptor {

    constructor(
        private messageService: MessageBus.MessageBusService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next
            .handle(request)
            .pipe(
                catchError(err => {
                        this.messageService.notify({
                            text: err.error?.message,
                            type: MessageBus.MessageTypes.Error
                        });

                        return throwError(() => err);
                    }
                ),
            ); 
    }
}
