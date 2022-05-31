import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
token:any;

  constructor(private httpService : HttpServicesService) { 
    //this.token=localStorage.getItem("token")
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

  login(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.postService(`User/Login/${reqdata.Email}/${reqdata.Password}`, reqdata,false,header)

  }
  forgotpassword(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':'token'
      })
    }
    return this.httpService.postService(`User/Forgotpassword/${reqdata.Email}`, reqdata,true,header)

  }

  resetpassword(reqdata: any,token:any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json-patch+json',
        'Authorization':'Bearer' + token
      })
    }
    return this.httpService.putService(`User/ChangePassward`, reqdata,true,header)

  }

}
