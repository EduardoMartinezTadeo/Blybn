import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialRentaPage } from './historial-renta.page';

describe('HistorialRentaPage', () => {
  let component: HistorialRentaPage;
  let fixture: ComponentFixture<HistorialRentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialRentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialRentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
