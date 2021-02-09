import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal5Page } from './modal5.page';

describe('Modal5Page', () => {
  let component: Modal5Page;
  let fixture: ComponentFixture<Modal5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
