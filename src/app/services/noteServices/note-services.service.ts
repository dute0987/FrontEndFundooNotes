import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServicesService {
  token: any;
  constructor(private httpService: HttpServicesService) {
    this.token = localStorage.getItem("token")
  }

  createnote(reqdata: any) {
    console.log(reqdata);
    console.log(this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.postService('Note', reqdata, true, header)
  }
  getNoteList() {
    this.token = localStorage.getItem('token')
    console.log("going inside service");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
      
    }
    console.log("data getting");
    return this.httpService.getService('Note/GetAllNotes',true,header)
 
  }
}
