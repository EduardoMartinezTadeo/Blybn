import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioMenuPage } from './inicio-menu.page';

describe('InicioMenuPage', () => {
  let component: InicioMenuPage;
  let fixture: ComponentFixture<InicioMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
