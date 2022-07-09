import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServicesService } from './httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class LabelServiceService {
  token:any;

  constructor(private httpService: HttpServicesService) {
    this.token = localStorage.getItem("token")
  }

  createLabel(reqdata: any) {
    console.log(reqdata);
    console.log(this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.postService(`CreateLabel/${reqdata.LabelName}`, reqdata, true, header)
  }

  getAllLable(UserId:any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.getService(`Getlabel/${UserId}`, true, header)
  }

  deleteLabel(reqdata:any) {
    console.log(reqdata)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.deleteService(`DeleteLabel/${reqdata.LabelId}`, true, header)
  }

  updateLabel(reqdata:any) {
    console.log(reqdata)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`UpdateLabel/${reqdata.LabelId}/${reqdata.LabelName}`,reqdata, true, header)
  }



}
