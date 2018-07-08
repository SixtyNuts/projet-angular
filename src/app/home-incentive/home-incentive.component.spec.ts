import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIncentiveComponent } from './home-incentive.component';

describe('HomeIncentiveComponent', () => {
  let component: HomeIncentiveComponent;
  let fixture: ComponentFixture<HomeIncentiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIncentiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIncentiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
