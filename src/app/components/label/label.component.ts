import { Component, Inject, Input, OnInit } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelServiceService } from 'src/app/services/label-service.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() labelCard: any=[];
  LabelName: any;
  side = true;
  isLable:boolean =false;
  isDelete:boolean =false;

  constructor(public labs: LabelServiceService) { }

  ngOnInit(): void {


  }
  hideAndShow(){
    console.log("calling hide")
    this.isLable=!this.isLable
    
  }
  show(){
    this.isDelete=!this.isDelete
  }
  
  onSubmit() {
    let reqData = {
      LabelName: this.LabelName,
    }
    console.log(reqData);
    this.labs.createLabel(reqData).subscribe((response: any) => {
      console.log(response);

    }, error => {
      console.log(error);
    });
  }
}






