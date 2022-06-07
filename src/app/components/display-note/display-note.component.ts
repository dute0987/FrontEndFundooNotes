import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
 @Input()GetNotes : any;
 @Output() displaytogetallnotes=new EventEmitter<string>();
 sentmsg:any;
 
 constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog(noteCard:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '250px',
      data: noteCard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  
  }

}
