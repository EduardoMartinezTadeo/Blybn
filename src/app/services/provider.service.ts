import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiRecuperarURL = environment.apiRecuperarURL;

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  
  constructor(public http: HttpClient) { }

  postData(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
  
    return this.http.put<any>(apiRecuperarURL + file, body, {headers})
  }
}
