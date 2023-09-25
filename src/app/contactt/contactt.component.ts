import { Component } from '@angular/core';

@Component({
  selector: 'app-contactt',
  template: `
    <p>
      This is contactt.component.ts template, You call me in app.component.html
    </p>

    <a routerLink="add">Add Contact</a><br>
    <a routerLink="edit/1">Edit Contact</a><br>

    <div><router-outlet></router-outlet></div>
  `,
  styleUrls: ['./contactt.component.css']
})
export class ContacttComponent {

}
