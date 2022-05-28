import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/services/userServices/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserServicesService) { }

  ngOnInit() {
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

      }, error => {
        console.log(error);
      });
    }
  }
}
