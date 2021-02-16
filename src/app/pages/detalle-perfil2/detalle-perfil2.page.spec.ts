import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallePerfil2Page } from './detalle-perfil2.page';

describe('DetallePerfil2Page', () => {
  let component: DetallePerfil2Page;
  let fixture: ComponentFixture<DetallePerfil2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePerfil2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePerfil2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
