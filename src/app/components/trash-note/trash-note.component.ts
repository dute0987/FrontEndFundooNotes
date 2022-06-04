import { Component, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteServices/note-services.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
  notesArr:any =[];
  constructor(private note:NoteServicesService) { }

  ngOnInit(): void {
    this.getAllTrashNotes()
  }

  getAllTrashNotes() {
    this.note.getNoteList().subscribe((response: any) =>{
      console.log(response);
      this.notesArr = response.data;
      console.log(this.notesArr);

      this.notesArr = this.notesArr.filter((object: any) => {
        return  object.isTrash === true;
      } )
    })

  }
  

}
