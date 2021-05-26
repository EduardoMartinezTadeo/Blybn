import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-modal-ganancia',
  templateUrl: './modal-ganancia.page.html',
  styleUrls: ['./modal-ganancia.page.scss'],
})
export class ModalGananciaPage {
  public chartData: ChartDataSets[] = [
    { data: [], label: 'Ganancias generales' },
  ];
  public chartType: ChartType = 'line';
  public chartType2: ChartType = 'pie';
  public chartLabels: Label[];
  public chartColors: Color[] = [
    {
      backgroundColor: [
        '#acb90b',
        '#17A589',
        '#F5B041',
        '#95A5A6',
        '#1F618D',
        '#F39C12',
      ],
      borderColor: [
        '#acb90b',
        '#17A589',
        '#F5B041',
        '#95A5A6',
        '#1F618D',
        '#F39C12',
      ],
      borderWidth: 1,
    },
  ];
  public chartColors2: Color[] = [
    {
      backgroundColor: [
        '#acb90b',
        '#17A589',
        '#F5B041',
        '#95A5A6',
        '#1F618D',
        '#F39C12',
      ],
    },
  ];
  public chartLegend: boolean = true;
  public stiker: string;
  public graficos: boolean = false;
  public noGanancia: boolean = false;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  labels: ['Servicio con ganancia de:'];
  cantidades: any;
  datos: any = [];

  ionViewWillEnter() {
    this.datos = this.navParams.get('datos');
    console.log(this.datos);
    if (this.datos == 0) {
      this.noGanancia = true;
    } else {
      this.graficos = true;
      this.cantidades = this.datos;
      const data = this.cantidades;
      this.chartData[0].data = [];
      this.chartLabels = [];
      for (let i in data) {
        this.chartData[0].data.push(data[i].bly_montoFinal);
        this.chartLabels.push(data[i].bly_idPago);
      }
    }
  }

  salir() {
    this.modalController.dismiss();
  }
}