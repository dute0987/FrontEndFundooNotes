import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistraionComponent } from './components/registraion/registraion.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { GetAllnotesComponent } from './components/get-allnotes/get-allnotes.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { IconComponent } from './components/icon/icon.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthguardServiceService } from './services/AuthguardService/authguard-service.service';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchieveNotesComponent } from './components/archieve-notes/archieve-notes.component';
import {MatMenuModule} from '@angular/material/menu';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FilterPipe } from './components/pipe/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    RegistraionComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    GetAllnotesComponent,
    CreateNoteComponent,
    DisplayNoteComponent,
    IconComponent,
    UpdateNoteComponent,
    ArchieveNotesComponent,
    TrashNoteComponent,
    FilterPipe,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,MatExpansionModule,
    MatDialogModule,
    MatMenuModule,
    MatSnackBarModule


  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
