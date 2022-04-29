import { Directive, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[appValidateEmail]'
})
export class ValidateEmailDirective implements AfterViewInit {

    constructor() { }

    ngAfterViewInit(): void {
        
    }

}