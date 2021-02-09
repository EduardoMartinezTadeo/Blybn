import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { According02Component } from './according02.component';

describe('According02Component', () => {
  let component: According02Component;
  let fixture: ComponentFixture<According02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ According02Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(According02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
