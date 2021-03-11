import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modal10PageRoutingModule } from './modal10-routing.module';

import { Modal10Page } from './modal10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modal10PageRoutingModule
  ],
  declarations: [Modal10Page]
})
export class Modal10PageModule {}
