import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisPropiedadesPage } from './mis-propiedades.page';

describe('MisPropiedadesPage', () => {
  let component: MisPropiedadesPage;
  let fixture: ComponentFixture<MisPropiedadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPropiedadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisPropiedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
