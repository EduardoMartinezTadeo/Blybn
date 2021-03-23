import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP3PageRoutingModule } from './leer-p3-routing.module';

import { LeerP3Page } from './leer-p3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP3PageRoutingModule
  ],
  declarations: [LeerP3Page]
})
export class LeerP3PageModule {}
