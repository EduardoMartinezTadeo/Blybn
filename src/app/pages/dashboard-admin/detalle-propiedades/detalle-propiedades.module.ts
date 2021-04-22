import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePropiedadesPageRoutingModule } from './detalle-propiedades-routing.module';

import { DetallePropiedadesPage } from './detalle-propiedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePropiedadesPageRoutingModule
  ],
  declarations: [DetallePropiedadesPage]
})
export class DetallePropiedadesPageModule {}
