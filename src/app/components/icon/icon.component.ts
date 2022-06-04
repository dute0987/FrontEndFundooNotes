import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteServicesService } from 'src/app/services/noteServices/note-services.service';
import { TrashNoteComponent } from '../trash-note/trash-note.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteCard: any;
 
  noteId: any;
  isDeleted:boolean=false;
  isArchived:boolean=false;

  constructor(private note: NoteServicesService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    let del = this.activatedroute.snapshot.component;

    if (del == TrashNoteComponent) {
      this.isDeleted = true;
      console.log(this.isDeleted);
    }
    // let arc = this.activatedroute.snapshot.component;
 
    // if (arc == ArchieveNotesComponent) {
    //   this.isArchived = true;
    //   console.log(this.isArchived);
    // }

  }

  Deletenote() {
    let reqdata = {
      noteId: [this.noteCard.noteId],
      isDeleted:true,

    }
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }

  ArchieveNote() {
    let reqdata = {
      noteId: [this.noteCard.noteId],
      isDeleted:true,

    }
    this.note.archieveNote(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }
}
