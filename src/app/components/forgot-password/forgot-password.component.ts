import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/services/userServices/user-services.service';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotpasswordForm!: FormGroup;
  submitted = false;
  forgotpassword: any;

  constructor(private formBuilder: FormBuilder,private user :UserServicesService) { }

  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
    });

}
onSubmit() {
  console.log(this.forgotpasswordForm.value);

  if (this.forgotpasswordForm.valid) {
    let reqData = {
      Email: this.forgotpasswordForm.value.email,
      // Password: this.loginForm.value.password,
    }
    this.user.forgotpassword(reqData).subscribe((response: any) => {
      console.log(response);

    }, error => {
      console.log(error);
    });
  }
}
}

