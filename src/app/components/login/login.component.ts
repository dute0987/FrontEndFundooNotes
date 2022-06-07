import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/services/userServices/user-services.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  token:any;
  users="1"

  constructor(private formBuilder: FormBuilder, private user: UserServicesService, private rou:Router) { 
    this.token=localStorage.getItem("token");
  }
  
  ngOnInit() {
    localStorage.setItem('SeesionUser',this.users) 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }
  onSubmit() {
    console.log(this.loginForm.value);


    if (this.loginForm.valid) {
      let reqData = {
        Email: this.loginForm.value.email,
        Password: this.loginForm.value.password,
      }
      this.user.login(reqData).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token",response.data)

      }, error => {
        console.log(error);
      });
    }
    this.rou.navigateByUrl('/dashboard/Notes')
  }
}
