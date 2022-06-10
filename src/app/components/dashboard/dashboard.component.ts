import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { LabelComponent } from '../label/label.component';
import { MatDialog } from '@angular/material/dialog';
import { LabelServiceService } from 'src/app/services/label-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message:any;
  value:any;
  LabelName:any;
  lableArray:any=[];
  UserId:any;

  mobileQuery: MediaQueryList;
  

  private _mobileQueryListener: () => void;

  constructor(private  getLable:LabelServiceService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private rou:Router,private snackBar:MatSnackBar,private data:DataService,public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit(): void {
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.getAllLable();
  }
  searchtitle(event: any) {
    console.log("input in search field ===",event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.data.changeMessage(Ddata)
  }

  logout(){
    localStorage.removeItem("token");
    this.rou.navigateByUrl('/login')
    this.snackBar.open('Logout Successfully..!!!','..', {
      duration: 3000,
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  getAllLable() { 
    let reqdata = {
      UserId: [this.lableArray.UserId],
    }
    console.log(this.UserId,'hi')
  
    this.getLable.getAllLable(reqdata).subscribe((response: any) => {
        this.lableArray = response.data;
        console.log(response);
        this.lableArray.reverse();
    })
  }
}
