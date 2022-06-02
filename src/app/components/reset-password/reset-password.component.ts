import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute , Params} from '@angular/router';
import { UserServicesService } from 'src/app/services/userServices/user-services.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetpasswordForm!: FormGroup;
  submitted = false;
  token:any

  constructor(private formBuilder: FormBuilder,private user:UserServicesService, private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.token = this.activateRoute.snapshot.paramMap.get('token')
    this.resetpasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',Validators.required],
    });
   
  }
  onSubmit() {
    //console.log(this.resetpasswordForm.value);
    if (this.resetpasswordForm.valid) {
      let reqData = {
        passward: this.resetpasswordForm.value.password,
        conformpassward: this.resetpasswordForm.value.confirmPassword,
      }
      console.log(this.token)
      //console.log(reqData)
      this.user.resetpassword(reqData,this.token).subscribe((response: any) => {
        console.log(response);

      }, error => {
        console.log(error);
      });
    }
  }
}