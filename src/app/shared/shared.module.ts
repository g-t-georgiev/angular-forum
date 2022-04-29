import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearNotificationDirective, ValidateEmailDirective } from './directives';

@NgModule({
    declarations: [
        ClearNotificationDirective,
        ValidateEmailDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ClearNotificationDirective,
        ValidateEmailDirective
    ]
})
export class SharedModule { }