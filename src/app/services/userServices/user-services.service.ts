import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
token:any;

  constructor(private httpService : HttpServicesService) { 
    this.token=localStorage.getItem("token")
  }

  registration(reqdata:any){
    console.log(reqdata);

    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json-patch+json',
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('User/Register',reqdata,false,header)
  }
}
