import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedeliComponent } from './fedeli.component';

describe('FedeliComponent', () => {
  let component: FedeliComponent;
  let fixture: ComponentFixture<FedeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FedeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FedeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
