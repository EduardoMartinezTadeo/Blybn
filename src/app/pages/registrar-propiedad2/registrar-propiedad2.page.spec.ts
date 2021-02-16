import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrarPropiedad2Page } from './registrar-propiedad2.page';

describe('RegistrarPropiedad2Page', () => {
  let component: RegistrarPropiedad2Page;
  let fixture: ComponentFixture<RegistrarPropiedad2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPropiedad2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarPropiedad2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
