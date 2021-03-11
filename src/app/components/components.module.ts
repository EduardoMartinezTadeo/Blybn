import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AccordingComponent } from './according/according.component';
import { According01Component } from './according01/according01.component';
import { According02Component } from './according02/according02.component';
import { According03Component } from './according03/according03.component';
import { IonicModule } from '@ionic/angular';
import { DrawerComponent } from './drawer/drawer.component';
import { According04Component } from './according04/according04.component';
@NgModule({
  declarations: [
    HeaderComponent,
    AccordingComponent,
    According01Component,
    According02Component,
    According03Component,
    According04Component,
    DrawerComponent
  ],
  exports: [
    HeaderComponent,
    AccordingComponent,
    According01Component,
    According02Component,
    According03Component,
    According04Component,
    DrawerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule {}