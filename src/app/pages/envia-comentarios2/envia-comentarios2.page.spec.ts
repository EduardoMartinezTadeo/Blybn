import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnviaComentarios2Page } from './envia-comentarios2.page';

describe('EnviaComentarios2Page', () => {
  let component: EnviaComentarios2Page;
  let fixture: ComponentFixture<EnviaComentarios2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviaComentarios2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnviaComentarios2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
