import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-sign',
    templateUrl: './sign.component.html',
    styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit, OnDestroy {

    private urlChange: Subscription | undefined;
    private currentUrl: ActivatedRoute[];
    private urlFragment$: Observable<UrlSegment[]>;

    private currentEndpoint!: string;
    pageMode!: string;

    constructor(
        private router: ActivatedRoute
    ) {
        this.currentUrl = this.router.pathFromRoot;
        this.urlFragment$ = this.currentUrl[2].url;
    }

    ngOnInit(): void {
        this.urlChange = this.urlFragment$
            .pipe(
                tap(
                    ([ urlFragment ]: UrlSegment[]) => {
                        // console.log(urlFragment);
                        this.currentEndpoint = urlFragment.path;
                        this.pageMode = this.currentEndpoint;
                    }
                )
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.urlChange?.unsubscribe();
    }

}