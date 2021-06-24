import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusRentaPageRoutingModule } from './status-renta-routing.module';

import { StatusRentaPage } from './status-renta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusRentaPageRoutingModule
  ],
  declarations: [StatusRentaPage]
})
export class StatusRentaPageModule {}
