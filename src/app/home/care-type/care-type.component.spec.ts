import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTypeComponent } from './care-type.component';

describe('CareTypeComponent', () => {
  let component: CareTypeComponent;
  let fixture: ComponentFixture<CareTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareTypeComponent]
    });
    fixture = TestBed.createComponent(CareTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
