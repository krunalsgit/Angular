import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRoutingModule } from './access-routing.module';
import { RegisterComponent } from './register/register.component';
import { MaterialModules } from 'src/Material-Modules';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
      CommonModule,
      AccessRoutingModule,
      MaterialModules,
      FormsModule,
      ReactiveFormsModule
    ]
})
export class AccessModule { }
