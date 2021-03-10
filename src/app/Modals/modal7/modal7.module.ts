import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modal7PageRoutingModule } from './modal7-routing.module';

import { Modal7Page } from './modal7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modal7PageRoutingModule
  ],
  declarations: [Modal7Page]
})
export class Modal7PageModule {}
