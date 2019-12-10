import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevelopersPageComponent } from './developers-page.component';

describe('DeveloperPageComponent', () => {
  let component: DevelopersPageComponent;
  let fixture: ComponentFixture<DevelopersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevelopersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
