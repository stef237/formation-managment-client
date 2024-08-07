import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormationToStudentComponent } from './add-formation-to-student.component';

describe('AddFormationToStudentComponent', () => {
  let component: AddFormationToStudentComponent;
  let fixture: ComponentFixture<AddFormationToStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFormationToStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFormationToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
