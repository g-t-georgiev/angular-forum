import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-sign',
    templateUrl: './sign.component.html',
    styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit, OnDestroy {

    private urlChange: Subscription | undefined;
    currentUrl: string = '';

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.urlChange = this.router
            .events
            .subscribe({
                next: (ev: Event) => {
                    if (ev instanceof NavigationStart) {
                        this.currentUrl = 'Url change detected.'
                    }

                    if (ev instanceof NavigationEnd) {
                        this.currentUrl = ev.url;
                    }

                    if (ev instanceof NavigationError) {
                        this.currentUrl = 'Error occured during navigation.';
                    }
                }
            })
    }

    ngOnDestroy(): void {
        this.urlChange?.unsubscribe();
    }

}