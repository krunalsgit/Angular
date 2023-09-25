import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContacttComponent } from './contactt/contactt.component';
import { StatusComponent } from './status/status.component';
//import { LoginComponent } from './login/login.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AccessRoutingModule } from './access/access-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { MaterialModules } from 'src/Material-Modules';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { ForgotPasswordComponent } from './access/forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContacttComponent,
    StatusComponent,
    AddcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //LoginComponent,
   // AccessRoutingModule
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModules
  ],
  providers: [
    //Authorization
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
