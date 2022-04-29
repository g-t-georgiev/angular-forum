import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { SignComponent } from './sign/sign.component';


@NgModule({
    declarations: [
        SignComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        FormsModule
    ],
    exports: [
        SignComponent
    ]
})
export class UserModule { }