import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePerfilPageRoutingModule } from './detalle-perfil-routing.module';

import { DetallePerfilPage } from './detalle-perfil.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePerfilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallePerfilPage]
})
export class DetallePerfilPageModule {}
