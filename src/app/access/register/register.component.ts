import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service: UserService,private route:Router) { }

  Country: any;
  State: any;
  City: any;
  Department: any;

  ngOnInit() {
    this.GetCountry();
    this.GetDepartment();
  }

  GetDepartment() {
    this.service.GetDepartment().subscribe(res => {
      this.Department = res;
      this.Department = this.Department.data
    });
  }

  GetCountry() {
    this.service.GetCountry().subscribe(res => {
      this.Country = res;
      this.Country = this.Country.data
    });
  }

  GetState(event: any) {
    this.service.GetState(event).subscribe(res => {
      this.State = res;
      this.State = this.State.data
    });
  }

  GetCity(event: any) {
    this.service.GetCity(event).subscribe(res => {
      this.City = res;
      this.City = this.City.data
    });
  }


  reactiveForm = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    DateOfBirth: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    Address: new FormControl('', Validators.required),
    Gender: new FormControl('', Validators.required),
    Contact: new FormControl('', Validators.required),
    Department: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
    State: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
    Image: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  })


  img: any;
  ImageType(event: any) {
    this.img = event.target.files[0];
  }

  response:any;
  RegisterUser() {
    if(this.reactiveForm.valid){
      let formdata = new FormData();
      formdata.append('Image', this.img as File)
      formdata.append('FirstName', this.reactiveForm.value.FirstName as string)
      formdata.append('LastName', this.reactiveForm.value.LastName as string)
      formdata.append('Email', this.reactiveForm.value.Email as string)
      formdata.append('Contact', this.reactiveForm.value.Contact as string)
      formdata.append('Address', this.reactiveForm.value.Address as string)
      formdata.append('DateOfBirth', this.reactiveForm.value.DateOfBirth?.toString().replace(' GMT+0530 (India Standard Time)','') as string)
      formdata.append('Gender', this.reactiveForm.value.Gender as string)
      formdata.append('Department', this.reactiveForm.value.Department as string)
      formdata.append('Country', this.reactiveForm.value.Country as string)
      formdata.append('State', this.reactiveForm.value.State as string)
      formdata.append('City', this.reactiveForm.value.City as string)
      formdata.append('Password', this.reactiveForm.value.Password as string)
      
      this.service.RegisterUser(formdata).subscribe(res => {
        this.response=res;
          if(this.response.success){
            this.route.navigate(["login"]);
            alert("Registeration Successfully!");
          }else{
            alert("Registeration Failed!");
          }
      })
    }else{
      alert("Please Fill Below Field Properly!");
    }

  }
}
