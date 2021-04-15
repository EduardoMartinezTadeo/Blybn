import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { delay } from 'rxjs/operators';

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
const apiConsultarAmenidades = environment.apiConsultarAmenidadesURL;
const apiConsultarEspacios = environment.apiConsultarEspaciosURL;
const apiConsultarSeguridad = environment.apiConsultarSeguridadURL;
const apiConsultarAventura = environment.apiConsultarAventuraURL;
const apiConsultarMoneda = environment.apiConsultarTipoMonedaURL;
const apiConsultarRequisitosRenta = environment.apiConsultarRequisitosRentaURL;
const apiConsultarRestricciones = environment.apiConsultarRestriccionesURL;
const apiConsultarHistorialPrevio = environment.apiConsultarRentaPreviaPropiedadURL;
const apiConsultarFrecuenciaRenta = environment.apiConsultarFrecuenciaRentaURL;
const apiConsultarPreaprobacionRenta = environment.apiConsultarPreaprobacionRentaURL;
const apiConsultarCatalogo1 = environment.apiCatalogoPreavisoURL;
const apiConsultarCatalogo2 = environment.apiCatalogoHorasURL;
const apiConsultarCatalogo3 = environment.apiCatalogoDisponibilidadURL;
const apiConsultarCatalogo4 = environment.apiCatalogoLlegadaURL;
const apiCargarImagenesAventura = environment.apiCargarImagenesAventuraURL;
const apiActualizarFotoPerfil = environment.apiActualizarFotoPerfilURL;
const apiFotoPerfilActualizada = environment.apiCargarFotoActualizadaURL;
const apiCargarPropiedad = environment.apiCargarPropiedadURL;
const apiCargarAlojamiento = environment.apiCargarAlojamientoURL;
const apiCargarAventura = environment.apiCargarAventuraURL;
const apiCargarExclusividad = environment.apiCargarExclusividadURL;
const apiCargarMonedaPago = environment.apiCargarTipoMonedaPagoURL;
const apiCargarPreaviso = environment.apiCargarPreavisoURL;
const apiCargarHoras = environment.apiCargarHorasURL;
const apiCargarVentanaDisponibilidad = environment.apiCargarVentanaDisponibilidadURL;
const apiActualizarRolUsuario = environment.apiActualizarRolUsuarioURL;
const apiCargarPerfilAdminBlybn = environment.apiCargarPerfilAdminURL;
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  server: string = 'https://emtdeveloper.com/server_blybn/api/';
  
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

  postDataA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarAmenidades + file, body, {headers})
  }

  postDataE(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarEspacios + file, body, {headers})
  }

  postDataS(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarSeguridad + file, body, {headers})
  }

  postDataAv(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarAventura + file, body, {headers})
  }

  postDataMn(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarMoneda + file, body, {headers})
  }

  postDataRRP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarRequisitosRenta + file, body, {headers})
  }

  postDataCRP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarRestricciones + file, body, {headers})
  }

  postDataHPR(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarHistorialPrevio + file, body, {headers})
  }

  postDataFRP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarFrecuenciaRenta + file, body, {headers})
  }

  postDataAPR(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarPreaprobacionRenta + file, body, {headers})
  }

  postDataC1PA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarCatalogo1 + file, body, {headers})
  }

  postDataC2H(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarCatalogo2 + file, body, {headers})
  }

  postDataC3VD(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarCatalogo3 + file, body, {headers})
  }

  postDataC4L(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiConsultarCatalogo4 + file, body, {headers})
  }

  postDataCIAV(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiCargarImagenesAventura + file, body, {headers})
  }

  postDataAFP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiActualizarFotoPerfil + file, body, {headers})
  }

  postDataCFPA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiFotoPerfilActualizada + file, body, {headers})
  }

  postDataCPRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiCargarPropiedad + file, body, {headers})
  }

  postDataCARF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiCargarAlojamiento + file, body, {headers})
  }

  postDataCAVRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiCargarAventura + file, body, {headers})
  }

  postDataCEPRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiCargarExclusividad + file, body, {headers})
  }

  postDataTMPRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiCargarMonedaPago + file, body, {headers})
  }

  postDataCPARF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiCargarPreaviso + file, body, {headers})
  }

  postDataCHRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiCargarHoras + file, body, {headers})
  }

  postDataCVDRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiCargarVentanaDisponibilidad + file, body, {headers})
  }

  postDataARUP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiActualizarRolUsuario + file, body, {headers})
  }

  postDataCPADB(body, file) {
    const headers = new HttpHeaders({
      'Content-Type':"application/json; charset=UTF-8"
    })
    
    return this.http.post<any>(apiCargarPerfilAdminBlybn + file, body, {headers})
  }
}
