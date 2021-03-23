import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP7PageRoutingModule } from './leer-p7-routing.module';

import { LeerP7Page } from './leer-p7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP7PageRoutingModule
  ],
  declarations: [LeerP7Page]
})
export class LeerP7PageModule {}
