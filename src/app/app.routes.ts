import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ViewAllListComponent } from './component/view-all-list/view-all-list.component';
import { SignupComponent } from './component/signup/signup.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'home/:userName',component:HomeComponent},
    {path:'viewAll',component:ViewAllListComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
];
