import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIncentivesComponent } from './home-incentives.component';

describe('HomeIncentivesComponent', () => {
  let component: HomeIncentivesComponent;
  let fixture: ComponentFixture<HomeIncentivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIncentivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIncentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
