import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP1PageRoutingModule } from './leer-p1-routing.module';

import { LeerP1Page } from './leer-p1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP1PageRoutingModule
  ],
  declarations: [LeerP1Page]
})
export class LeerP1PageModule {}
