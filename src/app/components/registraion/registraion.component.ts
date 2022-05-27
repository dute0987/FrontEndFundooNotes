import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/services/userServices/user-services.service';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.scss']
})
export class RegistraionComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder,private user :UserServicesService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      let reqData ={
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      }
      this.user.registration(reqData).subscribe((response:any)=>{
        console.log(response);
         
      }, error =>{
        console.log(error);
      });
    }
  }
}
