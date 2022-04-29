import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearNotificationDirective, ValidateEmailDirective } from './directives';
import { ValidateUrlDirective } from './directives/validate-url.directive';

@NgModule({
    declarations: [
        ClearNotificationDirective,
        ValidateEmailDirective,
        ValidateUrlDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ClearNotificationDirective,
        ValidateEmailDirective,
        ValidateUrlDirective
    ]
})
export class SharedModule { }