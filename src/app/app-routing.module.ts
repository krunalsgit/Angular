import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { ContacttComponent } from './contactt/contactt.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"about",component:AboutComponent,canActivate:[AuthGuard]},
  {path:"status",component:StatusComponent},
  //{path:"login",component:LoginComponent},
  { 
    path:"contact",
    component:ContacttComponent,
    children:[
      {path:"add",component:AddcontactComponent},
      {path:"edit/:id",component:AddcontactComponent}
    ],canActivate:[AuthGuard]
  },
  {path:"access",loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},
  {path:"login",loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)},
  {path:"**",component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
