import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteServicesService } from 'src/app/services/noteServices/note-services.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createnoteForm!: FormGroup;
  submitted = false;
  show = false;
  //panelOpenState = false;
  constructor(private note:NoteServicesService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createnoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      // colour:"Red"
      
    });

  }
  
  hideAndShow() {
    this.show = !this.show
  }
  onSubmit() {
    this.submitted=true;
    console.log(this.createnoteForm.value);

    if(this.createnoteForm.valid){
      let reqData ={
        title: this.createnoteForm.value.title,
        description: this.createnoteForm.value.description,
        colour:"NoColour"
      }
      this.note.createnote(reqData).subscribe((response:any)=>{
        console.log(response);
         
      }, error =>{
        console.log(error);
      });
      //window.location.reload();

    }
  }


}
