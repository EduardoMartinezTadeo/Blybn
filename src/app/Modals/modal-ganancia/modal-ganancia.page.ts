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
  public chartData: ChartDataSets[] = [{ data: [], label: 'valor' }];
  public chartType: ChartType = 'line';
  public chartLabels: Label[];
  public chartColors: Color[] = [
    { backgroundColor: '#85B024', borderColor: '#000000', borderWidth: 1 },
  ];
  public chartLegend: boolean = true;
  public stiker: string;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  labels: any;
  cantidades: any;
  datos: any = [];

  ionViewWillEnter() {
    this.datos = this.navParams.get('datos');
    this.cantidades = this.datos;
    const data = this.cantidades;
    this.chartData[0].data = [];
    for (let i in data) {
      this.chartData[0].data.push(data[i].bly_montoFinal);
    }
  }

  salir() {
    this.modalController.dismiss();
  }
}
