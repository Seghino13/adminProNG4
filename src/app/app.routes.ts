import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ProgessComponent } from './pages/progess/progess.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';



const appRoutes: Routes = [
        

        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
    
    
        {path: '**', component: NofoundpageComponent}
    

]

export const APP_ROUTES = RouterModule.forRoot( appRoutes,{ useHash:true} );