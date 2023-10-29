import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTrackerComponent } from './care-tracker.component';

describe('CareTrackerComponent', () => {
  let component: CareTrackerComponent;
  let fixture: ComponentFixture<CareTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareTrackerComponent]
    });
    fixture = TestBed.createComponent(CareTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
