import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiRecuperarURL = environment.apiRecuperarURL;
const apiActualizarFacturacion = environment.apiActualizarFacturacionURL;
const apiRegistrarComentario = environment.apiRegistrarComentarioURL;
const apiRegistrarComentarioAvanzado =
  environment.apiReigstrarComentarioAvanzadoURL;
const apiConsultarTipoPropiedad = environment.apiConsultarTipoPropiedadesURL;
const apiConsultarDescripcionPropiedad =
  environment.apiConsultarDescripcionPropiedadURL;
const apiConsultarTipoAlojamiento = environment.apiConsultarTipoAlojamientoURL;
const apiConsultarDescripcionAlojamiento =
  environment.apiConsultarDescripcionAlojamientoURL;
const apiConsultarExclusividad = environment.apiConsultarExclusividadURL;
const apiConsultarMuebles = environment.apiConsultarMueblesURL;
const apiConsultarAmenidades = environment.apiConsultarAmenidadesURL;
const apiConsultarEspacios = environment.apiConsultarEspaciosURL;
const apiConsultarSeguridad = environment.apiConsultarSeguridadURL;
const apiConsultarAventura = environment.apiConsultarAventuraURL;
const apiConsultarMoneda = environment.apiConsultarTipoMonedaURL;
const apiConsultarRequisitosRenta = environment.apiConsultarRequisitosRentaURL;
const apiConsultarRestricciones = environment.apiConsultarRestriccionesURL;
const apiConsultarHistorialPrevio =
  environment.apiConsultarRentaPreviaPropiedadURL;
const apiConsultarFrecuenciaRenta = environment.apiConsultarFrecuenciaRentaURL;
const apiConsultarPreaprobacionRenta =
  environment.apiConsultarPreaprobacionRentaURL;
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
const apiCargarVentanaDisponibilidad =
  environment.apiCargarVentanaDisponibilidadURL;
const apiActualizarRolUsuario = environment.apiActualizarRolUsuarioURL;
const apiCargarPerfilAdminBlybn = environment.apiCargarPerfilAdminURL;
const apiCargarPropiedadesUsuario = environment.apiCargarPropiedadesUsuarioURL;
const apiRegistrarFotosPropiedades = environment.apiRegistrarFotosPropiedadURL;
const apiCargarImagenTipoAventura = environment.apiCargarImagenTipoAventuraURL;
const apiCargarImagenesAventuraCiudad =
  environment.apiCargarImagenesAventuraCiudadURL;
const apiCargarImagenesAventuraPlaya =
  environment.apiCargarImagenesAventuraPlayaURL;
const apiCargarImagenesPropiedadIndividuales =
  environment.apiCargarImagenesPropiedadIndividualURL;
const apiCargarDetalleP1 = environment.apiCargarDetalleP1URL;
const apiCargarDetalleP2 = environment.apiCargarDetalleP2URL;
const apiCargarDetalleP3 = environment.apiCargarDetalleP3URL;
const apiCargarDetalleP4 = environment.apiCargarDetalleP4URL;
const apiCargarDetalleP5 = environment.apiCargarDetalleP5URL;
const apiCargarDetalleP6 = environment.apiCargarDetalleP6URL;
const apiCargarDetalleP7 = environment.apiCargarDetalleP7URL;
const apiCargarDetalleP8 = environment.apiCargarDetalleP8URL;
const apiCargarDetalleP9 = environment.apiCargarDetalleP9URL;
const apiCargarLlegadaIndividual = environment.apiCargarLlegadaIndividualURL;
const apiCargarHoraIndividual = environment.apiCargarHorasPropiedadesURL;
const apiCargarPreavisoIndividual = environment.apiCargarPreavisoIndividualURL;
const apiCargarVentanaIndividual =
  environment.apiCargarVentanaDisponibilidadPropiedadURL;
const apiCargarTipoPropiedadIndividual =
  environment.apiCargarTipoPropiedadIndividualURL;
const apiCargarAlojamientoIndividual =
  environment.apiCargarAlojamientoIndividualURL;
const apiCargarAventuraIndividual =
  environment.apiCargarTipoAventuraIndividualURL;
const apiCargarHistorialRentaIndividual =
  environment.apiCargarHistorialRentaIndividualURL;
const apiCargarPlaceIDURL = environment.apiCargarPlaceIdURL;
const apiCargarPropiedadesPromociones =
  environment.apiCargarPropiedadesConPromocionURL;
const apiEliminarPromocion = environment.apiEliminarPromocionURL;
const apiActualizarDisponibilidad =
  environment.apiActualizarDisponibilidadPropiedadURL;
const apiCargarInformacionBasica =
  environment.apiCargarInformacionBasicaDueñoURL;
const apiEliminarFavoritos = environment.apiEliminarFavoritosURL;
const apiCargarFavoritos = environment.apiCargarFavoritosURL;
const apiCargarPropiedadesVistas = environment.apiCargarPropiedadesVistasURL;
const apiRegistrarHistorialServicio =
  environment.apiRegistrarHistorialServicioURL;
@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  server: string = 'https://emtdeveloper.com/server_blybn/api/';

  constructor(public http: HttpClient) {}

  postData(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiRecuperarURL + file, body, { headers });
  }

  postDataAF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiActualizarFacturacion + file, body, {
      headers,
    });
  }

  postDataRC(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiRegistrarComentario + file, body, {
      headers,
    });
  }

  postDataRCA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiRegistrarComentarioAvanzado + file, body, {
      headers,
    });
  }

  postDataTP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarTipoPropiedad + file, body, {
      headers,
    });
  }

  postDataDTP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarDescripcionPropiedad + file, body, {
      headers,
    });
  }

  postDataTA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarTipoAlojamiento + file, body, {
      headers,
    });
  }

  postDataDTA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(
      apiConsultarDescripcionAlojamiento + file,
      body,
      { headers }
    );
  }

  postDataTE(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarExclusividad + file, body, {
      headers,
    });
  }

  postDataM(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarMuebles + file, body, { headers });
  }

  postDataA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarAmenidades + file, body, {
      headers,
    });
  }

  postDataE(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarEspacios + file, body, { headers });
  }

  postDataS(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarSeguridad + file, body, { headers });
  }

  postDataAv(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarAventura + file, body, { headers });
  }

  postDataMn(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarMoneda + file, body, { headers });
  }

  postDataRRP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarRequisitosRenta + file, body, {
      headers,
    });
  }

  postDataCRP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarRestricciones + file, body, {
      headers,
    });
  }

  postDataHPR(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarHistorialPrevio + file, body, {
      headers,
    });
  }

  postDataFRP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarFrecuenciaRenta + file, body, {
      headers,
    });
  }

  postDataAPR(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarPreaprobacionRenta + file, body, {
      headers,
    });
  }

  postDataC1PA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarCatalogo1 + file, body, { headers });
  }

  postDataC2H(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarCatalogo2 + file, body, { headers });
  }

  postDataC3VD(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarCatalogo3 + file, body, { headers });
  }

  postDataC4L(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiConsultarCatalogo4 + file, body, { headers });
  }

  postDataCIAV(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarImagenesAventura + file, body, {
      headers,
    });
  }

  postDataAFP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiActualizarFotoPerfil + file, body, {
      headers,
    });
  }

  postDataCFPA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiFotoPerfilActualizada + file, body, {
      headers,
    });
  }

  postDataCPRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarPropiedad + file, body, { headers });
  }

  postDataCARF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarAlojamiento + file, body, { headers });
  }

  postDataCAVRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarAventura + file, body, { headers });
  }

  postDataCEPRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarExclusividad + file, body, { headers });
  }

  postDataTMPRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarMonedaPago + file, body, { headers });
  }

  postDataCPARF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarPreaviso + file, body, { headers });
  }

  postDataCHRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarHoras + file, body, { headers });
  }

  postDataCVDRF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarVentanaDisponibilidad + file, body, {
      headers,
    });
  }

  postDataARUP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiActualizarRolUsuario + file, body, {
      headers,
    });
  }

  postDataCPADB(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarPerfilAdminBlybn + file, body, {
      headers,
    });
  }

  postDataCPUF(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarPropiedadesUsuario + file, body, {
      headers,
    });
  }

  postDataRFP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiRegistrarFotosPropiedades + file, body, {
      headers,
    });
  }

  postDataCTA(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarImagenTipoAventura + file, body, {
      headers,
    });
  }

  postDataCITAC(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarImagenesAventuraCiudad + file, body, {
      headers,
    });
  }

  postDataCITAP(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarImagenesAventuraPlaya + file, body, {
      headers,
    });
  }

  postDataCFPI(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(
      apiCargarImagenesPropiedadIndividuales + file,
      body,
      { headers }
    );
  }

  //Detalle propiedad
  detalleP1(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarDetalleP1 + file, body, { headers });
  }

  detalleP2(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarDetalleP2 + file, body, { headers });
  }

  detalleP3(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarDetalleP3 + file, body, { headers });
  }

  detalleP4(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarDetalleP4 + file, body, { headers });
  }

  detalleP5(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarDetalleP5 + file, body, { headers });
  }

  detalleP6(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarDetalleP6 + file, body, { headers });
  }

  detalleP7(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarDetalleP7 + file, body, { headers });
  }

  detalleP8(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarDetalleP8 + file, body, { headers });
  }

  detalleP9(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarDetalleP9 + file, body, { headers });
  }

  cargarLlegadaIndividual(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarLlegadaIndividual + file, body, {
      headers,
    });
  }

  cargarHoraIndividual(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarHoraIndividual + file, body, {
      headers,
    });
  }

  cargarPreavisoIndividual(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarPreavisoIndividual + file, body, {
      headers,
    });
  }

  cargarVentanaDisponibilidadIndividual(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarVentanaIndividual + file, body, {
      headers,
    });
  }

  cargarTipoPropiedadIndividual(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarTipoPropiedadIndividual + file, body, {
      headers,
    });
  }

  cargarAlojamientoIndividual(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarAlojamientoIndividual + file, body, {
      headers,
    });
  }

  cargarAventuraIndividual(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarAventuraIndividual + file, body, {
      headers,
    });
  }

  cargarHistorialRenta(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarHistorialRentaIndividual + file, body, {
      headers,
    });
  }

  cargarPlaceID(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarPlaceIDURL + file, body, { headers });
  }

  cargarPropiedadPromocion(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarPropiedadesPromociones + file, body, {
      headers,
    });
  }

  eliminarPromocion(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiEliminarPromocion + file, body, { headers });
  }

  actualizarDisponibilidadPropiedad(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiActualizarDisponibilidad + file, body, {
      headers,
    });
  }

  cargarInformacionPropietario(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarInformacionBasica + file, body, {
      headers,
    });
  }

  eliminarFavoritos(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiEliminarFavoritos + file, body, { headers });
  }

  cargarFavoritos(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarFavoritos + file, body, { headers });
  }

  cargarVistasPropiedades(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiCargarPropiedadesVistas + file, body, {
      headers,
    });
  }

  registrarHistorialServicio(body, file) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post<any>(apiRegistrarHistorialServicio + file, body, {
      headers,
    });
  }
}
