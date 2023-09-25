import { CanActivate, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  constructor(private route: Router,private service: UserService) { }
 
  canActivate() {
    const token=this.service.IsLoggedIn();
    if (token) {
      return true;
    }
    else {
      alert("Please Login!")
      this.route.navigate(["/"])
      return false;
    }
  }
};
