import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  
  LoginUser(data:any){
    return this.http.post('http://localhost:5050/api/Sign/Login', data);
  }

  GetCountry(){
    return this.http.get("http://localhost:5050/api/List/GetCountry");
  }

  GetState(id:any){
    return this.http.get(`http://localhost:5050/api/List/GetState?id=${id}`);
  }

  GetCity(id:any){
    return this.http.get(`http://localhost:5050/api/List/GetCity?id=${id}`);
  }

  GetDepartment(){
    return this.http.get("http://localhost:5050/api/List/GetDepartment");
  }

  RegisterUser(data:any){
   return this.http.post('http://localhost:5050/api/Sign/Register', data)
  }

  GetStudents(){
    return this.http.get('http://localhost:5050/api/Students/GetAllStudent')
  }


  ResetPassword(data:any){
    return this.http.post('http://localhost:5050/api/Sign/ForgotPassword',data)
  }

  IsLoggedIn(){
    return localStorage.getItem('token')!=null;  
  }
 }
