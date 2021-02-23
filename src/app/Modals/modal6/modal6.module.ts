import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modal6PageRoutingModule } from './modal6-routing.module';

import { Modal6Page } from './modal6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modal6PageRoutingModule
  ],
  declarations: [Modal6Page]
})
export class Modal6PageModule {}
