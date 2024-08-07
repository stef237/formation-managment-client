import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSeanceComponent } from './post-seance.component';

describe('PostSeanceComponent', () => {
  let component: PostSeanceComponent;
  let fixture: ComponentFixture<PostSeanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostSeanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
