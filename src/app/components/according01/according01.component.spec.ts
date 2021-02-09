import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { According01Component } from './according01.component';

describe('According01Component', () => {
  let component: According01Component;
  let fixture: ComponentFixture<According01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ According01Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(According01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
