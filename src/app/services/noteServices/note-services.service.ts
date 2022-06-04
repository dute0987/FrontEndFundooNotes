import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServicesService {
  token: any;
  //noteId:any;
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

  updateNote(reqdata: any,noteId:any) {
    console.log(reqdata);
    console.log(this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`Note/UpdateNote/${noteId}`, reqdata, true, header)
  }
  // archiveNote(reqdata:any,noteId:any){
  //   this.token = localStorage.getItem('token')
  //   console.log(reqdata);

  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization':'Bearer ' + this.token
  //     })
  //   }
  //   return this.httpService.postService(`Note/UpdateNote/${noteId}`,reqdata,true,header)
  // }

  deleteNote(reqdata: any) {
    console.log(reqdata);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json-patch+json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putService( `Note/TrashNote/${reqdata.noteId}`, reqdata, true,header );
  }  

  archieveNote(reqdata: any) {
    console.log(reqdata);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json-patch+json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putService( `Note/ArchiveNote/${reqdata.noteId}`, reqdata, true,header );
  }  

}
