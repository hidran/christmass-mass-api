import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessaDetailComponent } from './messa-detail.component';

describe('MessaDetailComponent', () => {
  let component: MessaDetailComponent;
  let fixture: ComponentFixture<MessaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
