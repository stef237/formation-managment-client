import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCertificatComponent } from './post-certificat.component';

describe('PostCertificatComponent', () => {
  let component: PostCertificatComponent;
  let fixture: ComponentFixture<PostCertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCertificatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
