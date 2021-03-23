import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP9PageRoutingModule } from './leer-p9-routing.module';

import { LeerP9Page } from './leer-p9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP9PageRoutingModule
  ],
  declarations: [LeerP9Page]
})
export class LeerP9PageModule {}
