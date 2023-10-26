import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantFormComponent } from './plant-form.component';

describe('PlantFormComponent', () => {
  let component: PlantFormComponent;
  let fixture: ComponentFixture<PlantFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantFormComponent]
    });
    fixture = TestBed.createComponent(PlantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
