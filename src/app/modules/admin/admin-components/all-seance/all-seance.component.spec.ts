import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSeanceComponent } from './all-seance.component';

describe('AllSeanceComponent', () => {
  let component: AllSeanceComponent;
  let fixture: ComponentFixture<AllSeanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllSeanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
