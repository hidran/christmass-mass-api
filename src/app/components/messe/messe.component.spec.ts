import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesseComponent } from './messe.component';

describe('MesseComponent', () => {
  let component: MesseComponent;
  let fixture: ComponentFixture<MesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
