import { Component, Inject,OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteServicesService } from 'src/app/services/noteServices/note-services.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title:any;
  description:any;
  noteId:any;
  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private note:NoteServicesService
  ) {
    this.title=data.title;
    this.description=data.description;
    this.noteId=data.noteId;
  }
  

  ngOnInit(): void {
    console.log("from the display notes",this.data)
    this.dialogRef.updateSize('30%', '33%');
  }

  onSubmit() {
    let reqData ={
      title: this.title,
      description: this.description,
      colour: "colourName",
     

    }
    this.note.updateNote(reqData,this.noteId).subscribe((response:any)=>{
      console.log(response);
       
    }, error =>{
      console.log(error);
    });
  }

}
