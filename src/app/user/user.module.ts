import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
    declarations: [
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
        SignInComponent,
        SignUpComponent
    ]
})
export class UserModule { }