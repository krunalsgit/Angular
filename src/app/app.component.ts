import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  constructor(private route:Router){}

  title = 'AngularFirst';
  ifIsLogin=true;

  ngDoCheck(): void {
    const currentRoute=this.route.url;
    if(currentRoute=="/login" || currentRoute=="/" || localStorage.getItem('token')==null){
      this.ifIsLogin=false;
    }else{
      this.ifIsLogin=true;
    }
  }
}
