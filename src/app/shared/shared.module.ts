import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearNotificationDirective, ValidateEmailDirective } from './directives';
import { ValidateUrlDirective } from './directives/validate-url.directive';
import { PasswordMatchDirective } from './directives/password-match.directive';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { MaxlengthDirective } from './directives/maxlength.directive';
import { ToggleDropdownDirective } from './directives/toggle-dropdown.directive';

@NgModule({
    declarations: [
        ClearNotificationDirective,
        ValidateEmailDirective,
        ValidateUrlDirective,
        PasswordMatchDirective,
        MaxlengthDirective,
        ValidationMessageComponent,
        ToggleDropdownDirective,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ClearNotificationDirective,
        ValidateEmailDirective,
        ValidateUrlDirective,
        PasswordMatchDirective,
        MaxlengthDirective,
        ValidationMessageComponent,
        ToggleDropdownDirective,
    ]
})
export class SharedModule { }