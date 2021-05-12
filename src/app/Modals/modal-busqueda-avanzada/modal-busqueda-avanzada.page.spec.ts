import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBusquedaAvanzadaPage } from './modal-busqueda-avanzada.page';

describe('ModalBusquedaAvanzadaPage', () => {
  let component: ModalBusquedaAvanzadaPage;
  let fixture: ComponentFixture<ModalBusquedaAvanzadaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBusquedaAvanzadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBusquedaAvanzadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
