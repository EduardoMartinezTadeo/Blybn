import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { According03Component } from './according03.component';

describe('According03Component', () => {
  let component: According03Component;
  let fixture: ComponentFixture<According03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ According03Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(According03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
