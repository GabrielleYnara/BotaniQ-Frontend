import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTypeFormComponent } from './care-type-form.component';

describe('CareTypeFormComponent', () => {
  let component: CareTypeFormComponent;
  let fixture: ComponentFixture<CareTypeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareTypeFormComponent]
    });
    fixture = TestBed.createComponent(CareTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
