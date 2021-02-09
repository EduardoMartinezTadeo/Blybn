import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviaComentariosPageRoutingModule } from './envia-comentarios-routing.module';

import { EnviaComentariosPage } from './envia-comentarios.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviaComentariosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EnviaComentariosPage]
})
export class EnviaComentariosPageModule {}
