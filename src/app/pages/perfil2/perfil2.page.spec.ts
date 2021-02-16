import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Perfil2Page } from './perfil2.page';

describe('Perfil2Page', () => {
  let component: Perfil2Page;
  let fixture: ComponentFixture<Perfil2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Perfil2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
