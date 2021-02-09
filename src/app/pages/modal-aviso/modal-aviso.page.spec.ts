import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAvisoPage } from './modal-aviso.page';

describe('ModalAvisoPage', () => {
  let component: ModalAvisoPage;
  let fixture: ComponentFixture<ModalAvisoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAvisoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAvisoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
