import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeanceToFormationComponent } from './add-seance-to-formation.component';

describe('AddSeanceToFormationComponent', () => {
  let component: AddSeanceToFormationComponent;
  let fixture: ComponentFixture<AddSeanceToFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSeanceToFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSeanceToFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
