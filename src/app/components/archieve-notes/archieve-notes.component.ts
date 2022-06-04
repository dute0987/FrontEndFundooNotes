import { Component, Inject, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteServices/note-services.service';

@Component({
  selector: 'app-archieve-notes',
  templateUrl: './archieve-notes.component.html',
  styleUrls: ['./archieve-notes.component.scss']
})
export class ArchieveNotesComponent implements OnInit {
  notesArr:any =[];
  constructor(private note:NoteServicesService) { }
    
    ngOnInit(): void {
      this.getAllArchieveNotes()
    }
  
    getAllArchieveNotes() {
      this.note.getNoteList().subscribe((response: any) =>{
        console.log(response);
        this.notesArr = response.data;
        console.log(this.notesArr);
  
        this.notesArr = this.notesArr.filter((object: any) => {
          return  object.isArchieve === true;
        } )
      })
  
    }

}
