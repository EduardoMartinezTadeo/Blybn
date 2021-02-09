import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccordingComponent } from './according.component';

describe('AccordingComponent', () => {
  let component: AccordingComponent;
  let fixture: ComponentFixture<AccordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
