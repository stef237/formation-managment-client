import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCertificatToStudentComponent } from './add-certificat-to-student.component';

describe('AddCertificatToStudentComponent', () => {
  let component: AddCertificatToStudentComponent;
  let fixture: ComponentFixture<AddCertificatToStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCertificatToStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCertificatToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
