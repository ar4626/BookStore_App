import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';
import { BookCardComponent } from './Components/book-card/book-card.component';
import { BookViewComponent } from './Components/book-view/book-view.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'home', pathMatch:'full'
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
        path: 'reset-password/:id', component: ResetPasswordComponent
    },
    {
        path: 'book', component: BookCardComponent
    },
    {
        path: 'home', component: DashboardComponent,
        children:[
            {
                path: '', redirectTo:'/home/books', pathMatch:'full'
            },
            {
                path: 'books', component: DisplayBooksComponent
            },
            {
                path: 'book', component: BookViewComponent
            },
            
        ]
    },
];
 