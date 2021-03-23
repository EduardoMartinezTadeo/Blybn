import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP10PageRoutingModule } from './leer-p10-routing.module';

import { LeerP10Page } from './leer-p10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP10PageRoutingModule
  ],
  declarations: [LeerP10Page]
})
export class LeerP10PageModule {}
