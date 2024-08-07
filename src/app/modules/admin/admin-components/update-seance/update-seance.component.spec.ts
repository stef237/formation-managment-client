import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeanceComponent } from './update-seance.component';

describe('UpdateSeanceComponent', () => {
  let component: UpdateSeanceComponent;
  let fixture: ComponentFixture<UpdateSeanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSeanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
