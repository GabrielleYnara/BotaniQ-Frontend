import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenComponent } from './garden.component';

describe('GardenComponent', () => {
  let component: GardenComponent;
  let fixture: ComponentFixture<GardenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GardenComponent]
    });
    fixture = TestBed.createComponent(GardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
