import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ajustes2Page } from './ajustes2.page';

describe('Ajustes2Page', () => {
  let component: Ajustes2Page;
  let fixture: ComponentFixture<Ajustes2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ajustes2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ajustes2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
