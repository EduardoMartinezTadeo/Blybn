import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalArchivedPageRoutingModule } from './modal-archived-routing.module';

import { ModalArchivedPage } from './modal-archived.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalArchivedPageRoutingModule
  ],
  declarations: [ModalArchivedPage]
})
export class ModalArchivedPageModule {}
