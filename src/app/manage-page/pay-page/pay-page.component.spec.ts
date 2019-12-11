import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayPageComponent } from './pay-page.component';

describe('PayPageComponent', () => {
  let component: PayPageComponent;
  let fixture: ComponentFixture<PayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
