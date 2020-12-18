import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessaComponent } from './messa.component';

describe('MessaComponent', () => {
  let component: MessaComponent;
  let fixture: ComponentFixture<MessaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
