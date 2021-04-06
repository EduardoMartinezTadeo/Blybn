import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFPageRoutingModule } from './registro-f-routing.module';

import { RegistroFPage } from './registro-f.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroFPageRoutingModule
  ],
  declarations: [RegistroFPage]
})
export class RegistroFPageModule {}
