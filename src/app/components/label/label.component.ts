import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  //LabelName:any;
  lableArray:any=[];
  UserId:any;
 
  

  constructor(public labs: LabelServiceService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getAllLable();

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
      this.snackBar.open('label added Successfully', '', {
        duration: 3000,
      })

    }, error => {
      console.log(error);
    });
  }

  getAllLable() { 
    let reqdata = {
      UserId: [this.lableArray.UserId],
    }
    console.log(this.UserId,'hi')
  
    this.labs.getAllLable(reqdata).subscribe((response: any) => {
        this.lableArray = response.data;
        console.log(response);
        this.lableArray.reverse();
    })
  }

  deleteLabel( labelId:any) { 
    let reqdata = {
      //LabelId: [this.lableArray.LabelId],
      LabelId : labelId
      //UserId: lableArray.UserId

    }
    console.log(reqdata)
  
    this.labs.deleteLabel(reqdata).subscribe((response: any) => {
        this.lableArray = response.data;
        console.log(response);
        this.snackBar.open('delete label Successfully', '', {
          duration: 3000,
        })
        //this.lableArray.reverse();
    })
  }

  updateLabel() { 
    let reqdata = {
      UserId: [this.lableArray.UserId],
      LabelName:[this.lableArray.LabelName]
    }
    console.log(this.UserId,'hi')
  
    this.labs.updateLabel(reqdata).subscribe((response: any) => {
        this.lableArray = response.data;
        console.log(response);
        this.lableArray.reverse();
    })
  }
 
}






