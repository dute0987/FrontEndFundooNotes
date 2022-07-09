import { Component, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteServices/note-services.service';

@Component({
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})
export class GetAllnotesComponent implements OnInit {

  constructor(private GetAllNote: NoteServicesService) { }
  notesArr: any;

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.GetAllNote.getNoteList().subscribe(
      (responce: any) => {
        this.notesArr = responce.data;
        console.log(responce);
        this.notesArr.reverse();
        this.notesArr = this.notesArr.filter((object: any) => {
          return  object.isTrash === false && object.isArchieve===false;
        } )

   });

  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getAllNotes()
  }
  receiveEvent($event:any){
    this.getAllNotes();
  }
}

