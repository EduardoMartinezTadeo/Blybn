import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiRecuperarURL = environment.apiRecuperarURL;
const apiActualizarFacturacion = environment.apiActualizarFacturacionURL;
const apiRegistrarComentario = environment.apiRegistrarComentarioURL;
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  
  constructor(public http: HttpClient) { }

  postData(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
  
    return this.http.post<any>(apiRecuperarURL + file, body, {headers})
  }

  postDataAF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
  
    return this.http.post<any>(apiActualizarFacturacion + file, body, {headers})
  }

  postDataRC(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
  
    return this.http.post<any>(apiRegistrarComentario + file, body, {headers})
  }

}
