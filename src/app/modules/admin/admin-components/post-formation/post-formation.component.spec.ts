import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormationComponent } from './post-formation.component';

describe('PostFormationComponent', () => {
  let component: PostFormationComponent;
  let fixture: ComponentFixture<PostFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
