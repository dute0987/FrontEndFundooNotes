import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteServicesService } from 'src/app/services/noteServices/note-services.service';
import { ArchieveNotesComponent } from '../archieve-notes/archieve-notes.component';
import { TrashNoteComponent } from '../trash-note/trash-note.component';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteCard: any;
  @Output() iconstodisplay = new EventEmitter<string>()
  @Output() iconstodisplayNote = new EventEmitter<string>()
  noteId: any;
  isTrash:boolean=false;
  isArchieve: boolean = false;
  // noteIdList:any;
  //  colour:any;
  // colors: Array<any> = [
  //   { code: '#e8eaed', name: 'grey' },
  //   { code: '#aecbfa', name: 'darkblue' },
  //   { code: '#FFFF00', name: 'yellow' },
  //   { code: '#d7aefb', name: 'purple' },
  //   { code: '#fdcfe8', name: 'pink' },
  //   { code: '#e6c9a8', name: 'brown' },
  //   { code: '#a7ffeb', name: 'teal' },
  // ];
  colorsArr = [{Colorcode:"pink"},{Colorcode:"yellow"},{Colorcode:"orange"},{Colorcode:"rgb(255,99,71)"},{Colorcode:"rgb(152,251,152)"},{Colorcode:"Teal"},{Colorcode:"rgb(106,90,205)"},{Colorcode:"rgb(240,230,140)"},{Colorcode:"rgb(238,130,238)"},{Colorcode:"rgb(255,160,122)"}];


  constructor(private note: NoteServicesService,private activatedroute:ActivatedRoute,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    let del= this.activatedroute.snapshot.component;
    if (del == TrashNoteComponent) {
      this.isTrash = true;
    }
    if (del == ArchieveNotesComponent) {
      this.isArchieve = true;
      console.log(this.isArchieve);
    }
  }
 
  changeColor(Colour:any)
  {
    console.log(Colour);
    this.note.colorPallete(this.noteCard.noteId,Colour).subscribe((res:any)=>{
      console.log(res);
      this.iconstodisplay.emit(res);
      //this.refresh.emit("hello");
      this.snackBar.open('color changes Successfully', '', {
        duration: 3000,
      })
    })
    //window.location.reload();

  }

  TrashNote() {
    let reqdata = {
      noteId: [this.noteCard.noteId],
      isTrash:true,

    }
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Trash Notes Successfully', '', {
        duration: 3000,
      })
    })
    // window.location.reload();

  }

  ArchieveNote() {
    let reqdata = {
      noteId: [this.noteCard.noteId],
      isArchieve: true
    }
    this.note.archieveNote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Archived Notes Successfully', '', {
        duration: 3000,
      })
    })
    // window.location.reload();

  }

  UnArchieveNote() {
    let reqdata = {
      noteId: [this.noteCard.noteId],
      isArchieve:false,
    }
    this.note.archieveNote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplayNote.emit(response);
      this.snackBar.open('UnArchived Notes Successfully', '', {
        duration: 3000,
      })
    })
     //window.location.reload();
  }

  permanentDelete() {
    let reqdata = {
      noteId: [this.noteCard.noteId],
      isTrash:false,
    }
    this.note.permanantdeleteNote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response);
      this.snackBar.open(' Notes Deleted Permanantly Successfully', '', {
        duration: 3000,
      })
    })
     //window.location.reload();
  }
  Restore() {
    let reqdata = {
      noteId: [this.noteCard.noteId],
      isTrash:false,
    }
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Notes Restore Successfully', '', {
        duration: 3000,
      })
    })
     //window.location.reload();
  }
}
