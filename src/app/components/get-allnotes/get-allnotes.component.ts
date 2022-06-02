import { Component, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteServices/note-services.service';

@Component({
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})
export class GetAllnotesComponent implements OnInit {

  constructor(private GetAllNote: NoteServicesService) { }
  notes: any=[];

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.GetAllNote.getNoteList().subscribe(
      (responce: any) => {
        this.notes = responce.data;
        console.log(responce);

      });
  }

}

