import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormationToTeacherComponent } from './add-formation-to-teacher.component';

describe('AddFormationToTeacherComponent', () => {
  let component: AddFormationToTeacherComponent;
  let fixture: ComponentFixture<AddFormationToTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFormationToTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFormationToTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
