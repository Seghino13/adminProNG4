import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './login/register.component';


//routes
import { APP_ROUTES } from './app.routes';

//Pages Module
import { PagesModules } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
