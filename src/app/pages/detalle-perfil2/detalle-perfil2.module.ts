import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePerfil2PageRoutingModule } from './detalle-perfil2-routing.module';

import { DetallePerfil2Page } from './detalle-perfil2.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePerfil2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallePerfil2Page]
})
export class DetallePerfil2PageModule {}
