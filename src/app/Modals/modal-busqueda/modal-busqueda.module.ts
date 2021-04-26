import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBusquedaPageRoutingModule } from './modal-busqueda-routing.module';

import { ModalBusquedaPage } from './modal-busqueda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBusquedaPageRoutingModule
  ],
  declarations: [ModalBusquedaPage]
})
export class ModalBusquedaPageModule {}
