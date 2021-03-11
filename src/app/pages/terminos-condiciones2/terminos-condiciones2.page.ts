import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-terminos-condiciones2',
  templateUrl: './terminos-condiciones2.page.html',
  styleUrls: ['./terminos-condiciones2.page.scss'],
})
export class TerminosCondiciones2Page {
  showToolbar = false;
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
  constructor(private modalCtrl: ModalController, private storage: Storage) { }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 225;
    }
  }

  ionViewWillEnter() {
    this.storage.get('licencia').then((res) => {
      this.data = res;
      this.bly_titulo = this.data.bly_titulo;
      this.Descripcion = this.data.Descripcion;
      this.bly_articulo1 = this.data.bly_articulo1;
      this.bly_parrafo1 = this.data.bly_parrafo1;
      this.bly_parrafo2 = this.data.bly_parrafo2;
      this.bly_parrafo3 = this.data.bly_parrafo3;
      this.bly_parrafo4 = this.data.bly_parrafo4;
      this.bly_articulo2 = this.data.bly_articulo2;
      this.bly_parrafo6 = this.data.bly_parrafo6;
      this.bly_parrafo7 = this.data.bly_parrafo7;
      this.bly_parrafo8 = this.data.bly_parrafo8;
      this.bly_parrafo9 = this.data.bly_parrafo9;
      this.bly_parrafo10 = this.data.bly_parrafo10;
      this.bly_parrafo11 = this.data.bly_parrafo11;
      this.bly_parrafo12 = this.data.bly_parrafo12;
      this.bly_parrafo13 = this.data.bly_parrafo13;
      this.bly_articulo3 = this.data.bly_articulo3;
      this.bly_parrafo14 = this.data.bly_parrafo14;
      this.bly_parrafo15 = this.data.bly_parrafo15;
      this.bly_parrafo16 = this.data.bly_parrafo16;
      this.bly_parrafo17 = this.data.bly_parrafo17;
      this.bly_parrafo18 = this.data.bly_parrafo18;
      this.bly_parrafo19 = this.data.bly_parrafo19;
      this.bly_parrafo20 = this.data.bly_parrafo20;
      this.bly_parrafo21 = this.data.bly_parrafo21;
      this.bly_parrafo22 = this.data.bly_parrafo22;
      this.bly_parrafo23 = this.data.bly_parrafo23;
      this.bly_parrafo24 = this.data.bly_parrafo24;
      this.bly_parrafo25 = this.data.bly_parrafo25;
      this.bly_parrafo26 = this.data.bly_parrafo26;
      this.bly_parrafo27 = this.data.bly_parrafo27;
      this.bly_parrafo28 = this.data.bly_parrafo28;
      this.bly_parrafo29 = this.data.bly_parrafo29;
      this.bly_parrafo30 = this.data.bly_parrafo30;
      this.bly_parrafo31 = this.data.bly_parrafo31;
      this.bly_parrafo32 = this.data.bly_parrafo32;
      this.bly_articulo4 = this.data.bly_articulo4;
      this.bly_parrafo34 = this.data.bly_parrafo34;
      this.bly_articulo5 = this.data.bly_articulo5;
      this.bly_parrafo36 = this.data.bly_parrafo36;
      this.bly_parrafo37 = this.data.bly_parrafo37;
      this.bly_parrafo38 = this.data.bly_parrafo38;
      this.bly_parrafo39 = this.data.bly_parrafo39;
      this.bly_parrafo40 = this.data.bly_parrafo40;
      this.bly_parrafo41 = this.data.bly_parrafo41;
      this.bly_parrafo42 = this.data.bly_parrafo42;
      this.bly_parrafo43 = this.data.bly_parrafo43;
      this.bly_parrafo44 = this.data.bly_parrafo44;
      this.bly_parrafo45 = this.data.bly_parrafo45;
      this.bly_parrafo46 = this.data.bly_parrafo46;
      this.bly_parrafo47 = this.data.bly_parrafo47;
      this.bly_articulo6 = this.data.bly_articulo6;
      this.bly_parrafo50 = this.data.bly_parrafo50;
      this.bly_articulo7 = this.data.bly_articulo7;
      this.bly_parrafo52 = this.data.bly_parrafo52;
      this.bly_articulo8 = this.data.bly_articulo8;
      this.bly_parrafo54 = this.data.bly_parrafo54;
      this.bly_parrafo55 = this.data.bly_parrafo55;
      this.bly_parrafo56 = this.data.bly_parrafo56;
      this.bly_parrafo57 = this.data.bly_parrafo57;
      this.bly_parrafo58 = this.data.bly_parrafo58;
      this.bly_parrafo59 = this.data.bly_parrafo59;
      this.bly_articulo9 = this.data.bly_articulo9;
      this.bly_parrafo60 = this.data.bly_parrafo60;
      this.bly_parrafo61 = this.data.bly_parrafo61;
      this.bly_parrafo62 = this.data.bly_parrafo62;
      this.bly_parrafo63 = this.data.bly_parrafo63;
      this.bly_parrafo64 = this.data.bly_parrafo64;
      this.bly_parrafo65 = this.data.bly_parrafo65;
      this.bly_parrafo66 = this.data.bly_parrafo66;
      this.bly_parrafo67 = this.data.bly_parrafo67;
      this.bly_parrafo68 = this.data.bly_parrafo68;
      this.bly_parrafo69 = this.data.bly_parrafo69;
      this.bly_articulo10 = this.data.bly_articulo10;
      this.bly_parrafo71 = this.data.bly_parrafo71;
      this.bly_parrafo72 = this.data.bly_parrafo72;
      this.bly_parrafo73 = this.data.bly_parrafo73;
      this.bly_parrafo74 = this.data.bly_parrafo74;
      this.bly_articulo11 = this.data.bly_articulo11;
      this.bly_parrafo77 = this.data.bly_parrafo77;
      this.bly_articulo12 = this.data.bly_articulo12;
      this.bly_parrafo79 = this.data.bly_parrafo79;
      this.bly_parrafo80 = this.data.bly_parrafo80;
      this.bly_parrafo81 = this.data.bly_parrafo81;
      this.bly_parrafo82 = this.data.bly_parrafo82;
      this.bly_articulo13 = this.data.bly_articulo13;
      this.bly_parrafo84 = this.data.bly_parrafo84;
      this.bly_parrafo85 = this.data.bly_parrafo85;
      this.bly_articulo14 = this.data.bly_articulo14;
      this.bly_parrafo87 = this.data.bly_parrafo87;
      this.bly_parrafo88 = this.data.bly_parrafo88;
      this.bly_parrafo89 = this.data.bly_parrafo89;
      this.bly_articulo15 = this.data.bly_articulo15;
      this.bly_parrafo90 = this.data.bly_parrafo90;
      this.bly_parrafo91 = this.data.bly_parrafo91;
      this.bly_parrafo92 = this.data.bly_parrafo92;
      this.bly_parrafo93 = this.data.bly_parrafo93;
      this.bly_parrafo94 = this.data.bly_parrafo94;
      this.bly_parrafo95 = this.data.bly_parrafo95;
      this.bly_parrafo96 = this.data.bly_parrafo96;
      this.bly_parrafo97 = this.data.bly_parrafo97;
      this.bly_parrafo98 = this.data.bly_parrafo98;
      this.bly_articulo16 = this.data.bly_articulo16;
      this.bly_articulo17 = this.data.bly_articulo17;
      this.bly_parrafo101 = this.data.bly_parrafo101;
      this.bly_parrafo102 = this.data.bly_parrafo102;
      this.bly_parrafo103 = this.data.bly_parrafo103;
      this.bly_parrafo104 = this.data.bly_parrafo104;
      this.bly_parrafo105 = this.data.bly_parrafo105;
      this.bly_parrafo106 = this.data.bly_parrafo106;
      this.bly_parrafo107 = this.data.bly_parrafo107;
      this.bly_articulo18 = this.data.bly_articulo18;
      this.bly_parrafo109 = this.data.bly_parrafo109;
      this.bly_parrafo110 = this.data.bly_parrafo110;
      this.bly_parrafo111 = this.data.bly_parrafo111;
      this.bly_articulo19 = this.data.bly_articulo19;
      this.bly_parrafo115 = this.data.bly_parrafo115;
      this.bly_parrafo116 = this.data.bly_parrafo116;
      this.bly_parrafo117 = this.data.bly_parrafo117;
      this.bly_parrafo118 = this.data.bly_parrafo118;
      this.bly_parrafo119 = this.data.bly_parrafo119;
      this.bly_parrafo120 = this.data.bly_parrafo120;
      this.bly_articulo20 = this.data.bly_articulo20;
      this.bly_parrafo123 = this.data.bly_parrafo123;
      this.bly_parrafo124 = this.data.bly_parrafo124;
      this.bly_parrafo125 = this.data.bly_parrafo125;
      this.bly_articulo21 = this.data.bly_articulo21;
      this.bly_parrafo127 = this.data.bly_parrafo127;
      this.bly_parrafo128 = this.data.bly_parrafo128;
      this.bly_parrafo129 = this.data.bly_parrafo129;
      this.bly_parrafo130 = this.data.bly_parrafo130;
      this.bly_parrafo131 = this.data.bly_parrafo131;
      this.bly_articulo22 = this.data.bly_articulo22;
      this.bly_parrafo135 = this.data.bly_parrafo135;
      this.bly_parrafo136 = this.data.bly_parrafo136;
      this.bly_parrafo137 = this.data.bly_parrafo137;
      this.bly_parrafo138 = this.data.bly_parrafo138;
      this.bly_parrafo139 = this.data.bly_parrafo139;
      this.bly_parrafo140 = this.data.bly_parrafo140;
      this.bly_parrafo141 = this.data.bly_parrafo141;
      this.bly_parrafo142 = this.data.bly_parrafo142;
    });
  }

}
