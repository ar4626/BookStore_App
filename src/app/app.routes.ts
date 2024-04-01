import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'reset-password', pathMatch:'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'forget-password', component: ForgetPasswordComponent
    },
    {
        path: 'reset-password', component: ResetPasswordComponent
    },
];
