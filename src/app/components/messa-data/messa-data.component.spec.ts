import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessaDataComponent } from './messa-data.component';

describe('MessaDataComponent', () => {
  let component: MessaDataComponent;
  let fixture: ComponentFixture<MessaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessaDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
