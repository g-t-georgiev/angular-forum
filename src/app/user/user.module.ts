import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { SignComponent } from './sign/sign.component';
import { SignInComponent } from './sign/sign-in/sign-in.component';
import { SignUpComponent } from './sign/sign-up/sign-up.component';


@NgModule({
    declarations: [
        SignComponent,
        SignInComponent,
        SignUpComponent
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