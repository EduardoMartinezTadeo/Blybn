import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetodoPago2Page } from './metodo-pago2.page';

describe('MetodoPago2Page', () => {
  let component: MetodoPago2Page;
  let fixture: ComponentFixture<MetodoPago2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoPago2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetodoPago2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
