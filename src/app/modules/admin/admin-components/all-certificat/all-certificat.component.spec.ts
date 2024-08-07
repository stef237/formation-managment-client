import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCertificatComponent } from './all-certificat.component';

describe('AllCertificatComponent', () => {
  let component: AllCertificatComponent;
  let fixture: ComponentFixture<AllCertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllCertificatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
