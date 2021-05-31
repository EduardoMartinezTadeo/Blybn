import { Component } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ProviderService } from '../../services/provider.service';


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
    private modalController: ModalController,
    private provider: ProviderService,
    private alertController: AlertController
  ) {}

  labels: ['Servicio con ganancia de:'];
  cantidades: any;
  datos: any = [];

  ionViewWillEnter() {
    this.noGanancia = false;
    this.datos = this.navParams.get('datos');
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

  alertGanancia: any = [];  
  informacion: any;
  bly_propiedad: number;
  async obtenerPropiedad(datos: any) {
    this.informacion = datos;
    this.bly_propiedad = this.informacion;
    let body = {
      aksi: 'ingresos',
      bly_propiedad: this.bly_propiedad
    }
    this.provider.cargarGananciaTotal(body, 'db_cargarGananciaTotal.php').subscribe((data) => {
      this.alertGanancia = data.result;
    });
  }

  
  
  salir() {
    this.modalController.dismiss();
  }
}