import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modal8PageRoutingModule } from './modal8-routing.module';

import { Modal8Page } from './modal8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modal8PageRoutingModule
  ],
  declarations: [Modal8Page]
})
export class Modal8PageModule {}
