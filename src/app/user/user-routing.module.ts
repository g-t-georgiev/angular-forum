import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignComponent } from './sign/sign.component';


const routes: Routes = [
    {
        path: 'login',
        component: SignComponent
    },
    {
        path: 'register',
        component: SignComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }