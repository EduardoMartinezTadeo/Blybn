import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialRenta2Page } from './historial-renta2.page';

describe('HistorialRenta2Page', () => {
  let component: HistorialRenta2Page;
  let fixture: ComponentFixture<HistorialRenta2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialRenta2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialRenta2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
