import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviaComentarios2PageRoutingModule } from './envia-comentarios2-routing.module';

import { EnviaComentarios2Page } from './envia-comentarios2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviaComentarios2PageRoutingModule
  ],
  declarations: [EnviaComentarios2Page]
})
export class EnviaComentarios2PageModule {}
