import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearNotificationDirective, ValidateEmailDirective } from './directives';
import { ValidateUrlDirective } from './directives/validate-url.directive';
import { PasswordMatchDirective } from './directives/password-match.directive';

@NgModule({
    declarations: [
        ClearNotificationDirective,
        ValidateEmailDirective,
        ValidateUrlDirective,
        PasswordMatchDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ClearNotificationDirective,
        ValidateEmailDirective,
        ValidateUrlDirective,
        PasswordMatchDirective
    ]
})
export class SharedModule { }