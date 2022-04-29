import { Component, } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';


@Component({
    selector: 'app-sign',
    templateUrl: './sign.component.html',
    styleUrls: ['./sign.component.css']
})
export class SignComponent {

    private currentUrl: ActivatedRoute[];
    private urlSegment: UrlSegment;
    private currentEndpoint!: string;
    
    pageMode!: string;

    constructor(
        private router: ActivatedRoute,
    ) {
        this.currentUrl = this.router.pathFromRoot;
        [ this.urlSegment ] = this.currentUrl[2].snapshot.url;
        this.currentEndpoint = this.urlSegment.path;
        this.pageMode = this.currentEndpoint;
    }

}