import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { NavController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
export enum ConnectionStatus {
  Online,
  Offline
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private router: Router,
    public network: Network,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#76801a');
      this.network.onDisconnect().subscribe(() => {
        this.initializeNetworkEvents();
      });
      this.network.onConnect().subscribe(() => {
        setTimeout(() => {
          this.initializeNetworkEvents();
        }, 2000);
      });
      this.initializeNetworkEvents();
      let status =  this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
      this.status.next(status);
    });
  }

  public initializeNetworkEvents() {
 
    this.network.onDisconnect().subscribe(() => {
      if (this.status.getValue() === ConnectionStatus.Online) {
        this.navCtrl.navigateRoot('/offline');
        this.updateNetworkStatus(ConnectionStatus.Offline);
      }
    });
 
    this.network.onConnect().subscribe(() => {
      if (this.status.getValue() === ConnectionStatus.Offline) {
        this.navCtrl.navigateRoot('/splash');
        this.updateNetworkStatus(ConnectionStatus.Online);
      }
    });
  }
 
  private async updateNetworkStatus(status: ConnectionStatus) {
    this.status.next(status);
 
    let connection = status == ConnectionStatus.Offline ? 'desconectado' : 'en línea';
    let toast = this.toastController.create({
      message: `Ahora estas ${connection}`,
      duration: 3000,
      position: 'bottom'
    });
    toast.then(toast => toast.present());
  }
 
  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.status.asObservable();
  }
 
  public getCurrentNetworkStatus(): ConnectionStatus {
    return this.status.getValue();
  }
}