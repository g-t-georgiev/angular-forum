import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { SignComponent } from './sign/sign.component';


@NgModule({
    declarations: [
        SignComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule
    ],
    exports: [
        SignComponent
    ]
})
export class UserModule { }