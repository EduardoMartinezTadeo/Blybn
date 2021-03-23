import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiRecuperarURL = environment.apiRecuperarURL;
const apiActualizarFacturacion = environment.apiActualizarFacturacionURL;
const apiRegistrarComentario = environment.apiRegistrarComentarioURL;
const apiRegistrarComentarioAvanzado = environment.apiReigstrarComentarioAvanzadoURL;
const apiConsultarTipoPropiedad = environment.apiConsultarTipoPropiedadesURL;
const apiConsultarDescripcionPropiedad = environment.apiConsultarDescripcionPropiedadURL;
const apiConsultarTipoAlojamiento = environment.apiConsultarTipoAlojamientoURL;
const apiConsultarDescripcionAlojamiento = environment.apiConsultarDescripcionAlojamientoURL;
const apiConsultarExclusividad = environment.apiConsultarExclusividadURL;
const apiConsultarMuebles = environment.apiConsultarMueblesURL;
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

  postDataRCA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
  
    return this.http.post<any>(apiRegistrarComentarioAvanzado + file, body, {headers})
  }

  postDataTP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarTipoPropiedad + file, body, {headers})
  }

  postDataDTP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarDescripcionPropiedad + file, body, {headers})
  }

  postDataTA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarTipoAlojamiento + file, body, {headers})
  }

  postDataDTA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarDescripcionAlojamiento + file, body, {headers})
  }

  postDataTE(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarExclusividad + file, body, {headers})
  }

  postDataM(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarMuebles + file, body, {headers})
  }

}
