import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallePerfilPage } from './detalle-perfil.page';

describe('DetallePerfilPage', () => {
  let component: DetallePerfilPage;
  let fixture: ComponentFixture<DetallePerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
