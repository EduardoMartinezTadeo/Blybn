// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiRegistroURL: 'http://192.168.0.101/server_blybn/api/db_registroUsuario.php/',
  apiLoginURL: 'http://192.168.0.101/server_blybn/api/db_iniciarSesion.php/',
  apiRecuperarURL: 'http://192.168.0.101/server_blybn/api/db_actualizarContrasena.php/',
  apiConsultarPerfilURL: 'http://192.168.0.101/server_blybn/api/db_consultarPerfil.php/',
  apiCargarPerfilURL: 'http://192.168.0.101/server_blybn/api/db_cargarPerfil.php/',
  apiRegistroFacturacionURL: 'http://192.168.0.101/server_blybn/api/db_registrarFacturacion.php/',
  apiCargarDatosFacturacionURL: 'http://192.168.0.101/server_blybn/api/db_cargarFacturacion.php/',
  apiRegistroSesionIniciadaURL: 'http://192.168.0.101/server_blybn/api/db_registroSesionIniciada.php/',
  apiRegistroCierreSesionURL: 'http://192.168.0.101/server_blybn/api/db_registroSesionFinalizada.php/',
  apiActualizarFacturacionURL: 'http://192.168.0.101/server_blybn/api/db_actualizarFacturacion.php/',
  apiConsultarTerminosCondicionesURL: 'http://192.168.0.101/server_blybn/api/db_consultarTerminos.php/',
  apiRegistrarComentarioURL: 'http://192.168.0.101/server_blybn/api/db_registrarComentario.php/',
  apiReigstrarComentarioAvanzadoURL: 'http://192.168.0.101/server_blybn/api/db_registrarComentarioAvanzado.php/',
  apiConsultarTipoPropiedadesURL: 'http://192.168.0.101/server_blybn/api/db_cargarTipoPropiedades.php/',
  apiConsultarDescripcionPropiedadURL: 'http://192.168.0.101/server_blybn/api/db_cargarDescripcionPropiedad.php/',
  apiConsultarTipoAlojamientoURL: 'http://192.168.0.101/server_blybn/api/db_cargarTipoAlojamiento.php/',
  apiConsultarDescripcionAlojamientoURL: 'http://192.168.0.101/server_blybn/api/db_cargarDescripcionAlojamiento.php/',
  apiConsultarExclusividadURL: 'http://192.168.0.101/server_blybn/api/db_cargarExclusividadPropiedad.php/',
  apiConsultarMueblesURL: 'http://192.168.0.101/server_blybn/api/db_cargarMuebles.php/',
  apiConsultarAmenidadesURL: 'http://192.168.0.101/server_blybn/api/db_cargarServicios.php/',
  apiConsultarEspaciosURL: 'http://192.168.0.101/server_blybn/api/db_cargarEspacios.php/',
  apiConsultarSeguridadURL: 'http://192.168.0.101/server_blybn/api/db_cargarSeguridad.php/',
  apiConsultarDescripcionSeguridadURL: 'http://192.168.0.101/server_blybn/api/db_cargarDescripcionSeguridad.php/',
  apiConsultarRestriccionesURL: 'http://192.168.0.101/server_blybn/api/db_cargarRestricciones.php/',
  apiConsultarAventuraURL: 'http://192.168.0.101/server_blybn/api/db_cargarTipoAventura.php/',
  apiConsultarTipoMonedaURL: 'http://192.168.0.101/server_blybn/api/db_cargarMonedaNacional.php/',
  apiConsultarRequisitosRentaURL: 'http://192.168.0.101/server_blybn/api/db_cargarRequisitos.php/',
  apiConsultarRentaPreviaPropiedadURL: 'http://192.168.0.101/server_blybn/api/db_cargarHistorialPrevioRenta.php/',
  apiConsultarFrecuenciaRentaURL: 'http://192.168.0.101/server_blybn/api/db_cargarFrecuenciaRenta.php/',
  apiConsultarPreaprobacionRentaURL: 'http://192.168.0.101/server_blybn/api/db_statusAprobacionRenta.php/',
  apiCatalogoPreavisoURL: 'http://192.168.0.101/server_blybn/api/db_catalogoPreaviso.php/',
  apiCatalogoHorasURL: 'http://192.168.0.101/server_blybn/api/db_catalogoHoras.php/',
  apiCatalogoDisponibilidadURL: 'http://192.168.0.101/server_blybn/api/db_catalogoVentaDisponibilidad.php/',
  apiCatalogoLlegadaURL: 'http://192.168.0.101/server_blybn/api/db_catalogoLlegadas.php/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
