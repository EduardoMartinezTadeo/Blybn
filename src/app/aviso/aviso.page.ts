import { Component, OnInit } from '@angular/core';
import { AvisoService } from '../services/aviso.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.page.html',
  styleUrls: ['./aviso.page.scss'],
})
export class AvisoPage implements OnInit {
  data = {
    bly_numTerminosCondiciones: '',
    bly_titulo: '',
    Descripcion: '',
    bly_descripcion: '',
    bly_articulo1: '',
    bly_parrafo1: '',
    bly_parrafo2: '',
    bly_parrafo3: '',
    bly_parrafo4: '',
    bly_articulo2: '',
    bly_parrafo6: '',
    bly_parrafo7: '',
    bly_parrafo8: '',
    bly_parrafo9: '',
    bly_parrafo10: '',
    bly_parrafo11: '',
    bly_parrafo12: '',
    bly_parrafo13: '',
    bly_articulo3: '',
    bly_parrafo14: '',
    bly_parrafo15: '',
    bly_parrafo16: '',
    bly_parrafo17: '',
    bly_parrafo18: '',
    bly_parrafo19: '',
    bly_parrafo20: '',
    bly_parrafo21: '',
    bly_parrafo22: '',
    bly_parrafo23: '',
    bly_parrafo24: '',
    bly_parrafo25: '',
    bly_parrafo26: '',
    bly_parrafo27: '',
    bly_parrafo28: '',
    bly_parrafo29: '',
    bly_parrafo30: '',
    bly_parrafo31: '',
    bly_parrafo32: '',
    bly_articulo4: '',
    bly_parrafo34: '',
    bly_articulo5: '',
    bly_parrafo36: '',
    bly_parrafo37: '',
    bly_parrafo38: '',
    bly_parrafo39: '',
    bly_parrafo40: '',
    bly_parrafo41: '',
    bly_parrafo42: '',
    bly_parrafo43: '',
    bly_parrafo44: '',
    bly_parrafo45: '',
    bly_parrafo46: '',
    bly_parrafo47: '',
    bly_articulo6: '',
    bly_parrafo50: '',
    bly_articulo7: '',
    bly_parrafo52: '',
    bly_articulo8: '',
    bly_parrafo54: '',
    bly_parrafo55: '',
    bly_parrafo56: '',
    bly_parrafo57: '',
    bly_parrafo58: '',
    bly_parrafo59: '',
    bly_articulo9: '',
    bly_parrafo60: '',
    bly_parrafo61: '',
    bly_parrafo62: '',
    bly_parrafo63: '',
    bly_parrafo64: '',
    bly_parrafo65: '',
    bly_parrafo66: '',
    bly_parrafo67: '',
    bly_parrafo68: '',
    bly_parrafo69: '',
    bly_articulo10: '',
    bly_parrafo71: '',
    bly_parrafo72: '',
    bly_parrafo73: '',
    bly_parrafo74: '',
    bly_articulo11: '',
    bly_parrafo77: '',
    bly_articulo12: '',
    bly_parrafo79: '',
    bly_parrafo80: '',
    bly_parrafo81: '',
    bly_parrafo82: '',
    bly_articulo13: '',
    bly_parrafo84: '',
    bly_parrafo85: '',
    bly_articulo14: '',
    bly_parrafo87: '',
    bly_parrafo88: '',
    bly_parrafo89: '',
    bly_articulo15: '',
    bly_parrafo90: '',
    bly_parrafo91: '',
    bly_parrafo92: '',
    bly_parrafo93: '',
    bly_parrafo94: '',
    bly_parrafo95: '',
    bly_parrafo96: '',
    bly_parrafo97: '',
    bly_parrafo98: '',
    bly_articulo16: '',
    bly_articulo17: '',
    bly_parrafo101: '',
    bly_parrafo102: '',
    bly_parrafo103: '',
    bly_parrafo104: '',
    bly_parrafo105: '',
    bly_parrafo106: '',
    bly_parrafo107: '',
    bly_articulo18: '',
    bly_parrafo109: '',
    bly_parrafo110: '',
    bly_parrafo111: '',
    bly_articulo19: '',
    bly_parrafo115: '',
    bly_parrafo116: '',
    bly_parrafo117: '',
    bly_parrafo118: '',
    bly_parrafo119: '',
    bly_parrafo120: '',
    bly_articulo20: '',
    bly_parrafo123: '',
    bly_parrafo124: '',
    bly_parrafo125: '',
    bly_articulo21: '',
    bly_parrafo127: '',
    bly_parrafo128: '',
    bly_parrafo129: '',
    bly_parrafo130: '',
    bly_parrafo131: '',
    bly_articulo22: '',
    bly_parrafo135: '',
    bly_parrafo136: '',
    bly_parrafo137: '',
    bly_parrafo138: '',
    bly_parrafo139: '',
    bly_parrafo140: '',
    bly_parrafo141: '',
    bly_parrafo142: '',
  };

  bly_numTerminosCondiciones: string;
  bly_titulo: string;
  Descripcion: string;
  bly_descripcion: string;
  bly_articulo1: string;
  bly_parrafo1: string;
  bly_parrafo2: string;
  bly_parrafo3: string;
  bly_parrafo4: string;
  bly_articulo2: string;
  bly_parrafo6: string;
  bly_parrafo7: string;
  bly_parrafo8: string;
  bly_parrafo9: string;
  bly_parrafo10: string;
  bly_parrafo11: string;
  bly_parrafo12: string;
  bly_parrafo13: string;
  bly_articulo3: string;
  bly_parrafo14: string;
  bly_parrafo15: string;
  bly_parrafo16: string;
  bly_parrafo17: string;
  bly_parrafo18: string;
  bly_parrafo19: string;
  bly_parrafo20: string;
  bly_parrafo21: string;
  bly_parrafo22: string;
  bly_parrafo23: string;
  bly_parrafo24: string;
  bly_parrafo25: string;
  bly_parrafo26: string;
  bly_parrafo27: string;
  bly_parrafo28: string;
  bly_parrafo29: string;
  bly_parrafo30: string;
  bly_parrafo31: string;
  bly_parrafo32: string;
  bly_articulo4: string;
  bly_parrafo34: string;
  bly_articulo5: string;
  bly_parrafo36: string;
  bly_parrafo37: string;
  bly_parrafo38: string;
  bly_parrafo39: string;
  bly_parrafo40: string;
  bly_parrafo41: string;
  bly_parrafo42: string;
  bly_parrafo43: string;
  bly_parrafo44: string;
  bly_parrafo45: string;
  bly_parrafo46: string;
  bly_parrafo47: string;
  bly_articulo6: string;
  bly_parrafo50: string;
  bly_articulo7: string;
  bly_parrafo52: string;
  bly_articulo8: string;
  bly_parrafo54: string;
  bly_parrafo55: string;
  bly_parrafo56: string;
  bly_parrafo57: string;
  bly_parrafo58: string;
  bly_parrafo59: string;
  bly_articulo9: string;
  bly_parrafo60: string;
  bly_parrafo61: string;
  bly_parrafo62: string;
  bly_parrafo63: string;
  bly_parrafo64: string;
  bly_parrafo65: string;
  bly_parrafo66: string;
  bly_parrafo67: string;
  bly_parrafo68: string;
  bly_parrafo69: string;
  bly_articulo10: string;
  bly_parrafo71: string;
  bly_parrafo72: string;
  bly_parrafo73: string;
  bly_parrafo74: string;
  bly_articulo11: string;
  bly_parrafo77: string;
  bly_articulo12: string;
  bly_parrafo79: string;
  bly_parrafo80: string;
  bly_parrafo81: string;
  bly_parrafo82: string;
  bly_articulo13: string;
  bly_parrafo84: string;
  bly_parrafo85: string;
  bly_articulo14: string;
  bly_parrafo87: string;
  bly_parrafo88: string;
  bly_parrafo89: string;
  bly_articulo15: string;
  bly_parrafo90: string;
  bly_parrafo91: string;
  bly_parrafo92: string;
  bly_parrafo93: string;
  bly_parrafo94: string;
  bly_parrafo95: string;
  bly_parrafo96: string;
  bly_parrafo97: string;
  bly_parrafo98: string;
  bly_articulo16: string;
  bly_articulo17: string;
  bly_parrafo101: string;
  bly_parrafo102: string;
  bly_parrafo103: string;
  bly_parrafo104: string;
  bly_parrafo105: string;
  bly_parrafo106: string;
  bly_parrafo107: string;
  bly_articulo18: string;
  bly_parrafo109: string;
  bly_parrafo110: string;
  bly_parrafo111: string;
  bly_articulo19: string;
  bly_parrafo115: string;
  bly_parrafo116: string;
  bly_parrafo117: string;
  bly_parrafo118: string;
  bly_parrafo119: string;
  bly_parrafo120: string;
  bly_articulo20: string;
  bly_parrafo123: string;
  bly_parrafo124: string;
  bly_parrafo125: string;
  bly_articulo21: string;
  bly_parrafo127: string;
  bly_parrafo128: string;
  bly_parrafo129: string;
  bly_parrafo130: string;
  bly_parrafo131: string;
  bly_articulo22: string;
  bly_parrafo135: string;
  bly_parrafo136: string;
  bly_parrafo137: string;
  bly_parrafo138: string;
  bly_parrafo139: string;
  bly_parrafo140: string;
  bly_parrafo141: string;
  bly_parrafo142: string;
  informacionR1: any;
  informacionR2: any;
  informacionR3: any;
  informacionR4: any;
  informacionR5: any;
  informacionR6: any;
  informacionR7: any;
  informacionR8: any;
  informacionR9: any;
  informacionR10: any;  
  informacionR11: any;
  informacionEspecial: any;
  constructor(
    private aviso: AvisoService,
    private storage: Storage
  ) {
    this.informacionR1 = {
      registro1: false
    }
    this.informacionR2 = {
      registro2: false
    }
    this.informacionR3 = {
      registro3: false
    }
    this.informacionR4 = {
      registro4: false
    }
    this.informacionR5 = {
      registro5: false
    }
    this.informacionR6 = {
      registro6: false
    }
    this.informacionR7 = {
      registro7: false
    }
    this.informacionR8 = {
      registro8: false
    }
    this.informacionR9 = {
      registro9: false
    }
    this.informacionR10 = {
      registro10: false
    }
    this.informacionR11 = {
      registro11: false
    }
    this.informacionEspecial = {
      finalActivar: false
    } 
  }
  public btnEspecial: boolean = false;
  ionViewWillEnter() {
    this.storage.get('licencia').then((res) => {
      this.data = res;
      this.Descripcion = this.data.bly_descripcion;
    });
  }

  ngOnInit() {   
    this.storage.set('botonEspecial', this.informacionEspecial).then((res) => {
      this.btnEspecial = false;
    });
    this.storage.set('registroP1', this.informacionR1).then((res) => {
    });
    this.storage.set('registroP2', this.informacionR2).then((res) => {
    });
    this.storage.set('registroP3', this.informacionR3).then((res) => {
    });
    this.storage.set('registroP4', this.informacionR4).then((res) => {
    });
    this.storage.set('registroP5', this.informacionR5).then((res) => {
    });
    this.storage.set('registroP6', this.informacionR6).then((res) => {
    });
    this.storage.set('registroP7', this.informacionR7).then((res) => {
    });
    this.storage.set('registroP8', this.informacionR8).then((res) => {
    });
    this.storage.set('registroP9', this.informacionR9).then((res) => {
    });
    this.storage.set('registroP10', this.informacionR10).then((res) => {
    });
    this.storage.set('registroP11', this.informacionR11).then((res) => {
    }); 
  }

  onlogin() {
    this.aviso.aviso();
  }
}
