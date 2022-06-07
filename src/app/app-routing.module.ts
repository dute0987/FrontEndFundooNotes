import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistraionComponent } from './components/registraion/registraion.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { GetAllnotesComponent } from './components/get-allnotes/get-allnotes.component';
import { AuthguardGuard } from './authguard.guard';
import { ArchieveNotesComponent } from './components/archieve-notes/archieve-notes.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';

const routes: Routes = [
{path:'' ,redirectTo:"/login" ,pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'registration',component:RegistraionComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'reset-password/:token',component:ResetPasswordComponent},
{path:'dashboard',component:DashboardComponent,canActivate:[AuthguardGuard],
children:[
  {path:'Notes',component:GetAllnotesComponent},
  {path:'Arvhieve',component:ArchieveNotesComponent},
  {path:'Trash',component:TrashNoteComponent}
]
},
// {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
