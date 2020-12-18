import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedeleDataComponent } from './fedele-data.component';

describe('FedeleDataComponent', () => {
  let component: FedeleDataComponent;
  let fixture: ComponentFixture<FedeleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FedeleDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FedeleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
