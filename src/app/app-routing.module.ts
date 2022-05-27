import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistraionComponent } from './components/registraion/registraion.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'registration',component:RegistraionComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'reset-password',component:ResetPasswordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
