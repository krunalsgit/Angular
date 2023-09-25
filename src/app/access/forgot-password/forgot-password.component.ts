import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  passwordForm: FormGroup | any;

  constructor(private route:Router,private formBuilder: FormBuilder,private service:UserService){}
  
  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['']
    }, { validator: this.passwordMatchValidator });
  }

  // Custom password match validator
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('Password');
    const confirmPassword = form.get('ConfirmPassword');
    if (password !== null && confirmPassword!=null) {
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ mismatch: true });
      } else {
        confirmPassword.setErrors(null);
      }
    }
  }
  
  IsReset:any;
  ResetPassword(data:any){
    if(this.passwordForm.valid){
      this.service.ResetPassword(data.value).subscribe(res=>{
        this.IsReset=res
        if (this.IsReset.data!=null) {
          this.route.navigate(["login"])
          alert("Password Reset Successfully!")
        }else{
          alert("Password Not Reset!")
        }
      })
    }
  }
}
