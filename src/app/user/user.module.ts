import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SignComponent } from './sign/sign.component';


@NgModule({
    declarations: [
        SignComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    exports: [
        SignComponent
    ]
})
export class UserModule { }