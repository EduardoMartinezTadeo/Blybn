import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnviaComentariosPage } from './envia-comentarios.page';

describe('EnviaComentariosPage', () => {
  let component: EnviaComentariosPage;
  let fixture: ComponentFixture<EnviaComentariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviaComentariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnviaComentariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
