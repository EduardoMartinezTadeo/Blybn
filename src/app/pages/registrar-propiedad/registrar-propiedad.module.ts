import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPropiedadPageRoutingModule } from './registrar-propiedad-routing.module';

import { RegistrarPropiedadPage } from './registrar-propiedad.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPropiedadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistrarPropiedadPage]
})
export class RegistrarPropiedadPageModule {}
