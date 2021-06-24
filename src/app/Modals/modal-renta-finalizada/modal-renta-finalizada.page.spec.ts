import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRentaFinalizadaPage } from './modal-renta-finalizada.page';

describe('ModalRentaFinalizadaPage', () => {
  let component: ModalRentaFinalizadaPage;
  let fixture: ComponentFixture<ModalRentaFinalizadaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRentaFinalizadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRentaFinalizadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
