import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card" 
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {MatTableModule} from "@angular/material/table"
import { FormsModule } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatTableModule,FormsModule], //we import here because it is stand alone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:UserService,private route:Router){}
  
  ngOnInit():void{
    localStorage.clear();
  }

  response:any;

  LoginUser(data:any){
    if(data.valid){
      this.service.LoginUser(data.value).subscribe(res=>{
        this.response=res;
        if(this.response.success){
          localStorage.setItem('token',this.response.data.jwT_Token)
          this.route.navigate(["home"]);
        }else{
          alert("Login Failed!");
        }
      });
    }
  }

  RedirectToRegister(){
    this.route.navigate(["access/register"]);
  }
}
