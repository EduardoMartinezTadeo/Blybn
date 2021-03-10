import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

const apiCargarPerfil = environment.apiCargarPerfilURL;
const apiRegistroSesionIniciada = environment.apiRegistroSesionIniciadaURL;
const apiRegistroCerrarSesion = environment.apiRegistroCierreSesionURL;

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(public http: HttpClient) { }

  postData(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
  
    return this.http.post<any>(apiCargarPerfil + file, body, {headers})
  }

  postDataIS(body, file){
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
  
    return this.http.post<any>(apiRegistroSesionIniciada + file, body, {headers})
  }

  postDataCS(body, file){
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
  
    return this.http.post<any>(apiRegistroCerrarSesion + file, body, {headers})
  }
}
