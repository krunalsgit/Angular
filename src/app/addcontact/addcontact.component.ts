import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent {
  constructor(private route:ActivatedRoute){}
  ngOnInit():void{
    const routeId=this.route.snapshot.paramMap.get("id");
    console.log(routeId)
  }
}
