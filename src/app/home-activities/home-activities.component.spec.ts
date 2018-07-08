import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActivitiesComponent } from './home-activities.component';

describe('HomeActivitiesComponent', () => {
  let component: HomeActivitiesComponent;
  let fixture: ComponentFixture<HomeActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
