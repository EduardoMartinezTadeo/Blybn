import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBusquedaErrorPageRoutingModule } from './modal-busqueda-error-routing.module';

import { ModalBusquedaErrorPage } from './modal-busqueda-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBusquedaErrorPageRoutingModule 
  ],
  declarations: [ModalBusquedaErrorPage]
})
export class ModalBusquedaErrorPageModule {}
