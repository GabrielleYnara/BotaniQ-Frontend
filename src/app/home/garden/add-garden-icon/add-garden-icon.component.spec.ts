import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGardenIconComponent } from './add-garden-icon.component';

describe('AddGardenIconComponent', () => {
  let component: AddGardenIconComponent;
  let fixture: ComponentFixture<AddGardenIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGardenIconComponent]
    });
    fixture = TestBed.createComponent(AddGardenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
