import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP2PageRoutingModule } from './leer-p2-routing.module';

import { LeerP2Page } from './leer-p2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP2PageRoutingModule
  ],
  declarations: [LeerP2Page]
})
export class LeerP2PageModule {}
