import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedeleComponent } from './fedele.component';

describe('FedeleComponent', () => {
  let component: FedeleComponent;
  let fixture: ComponentFixture<FedeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FedeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FedeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
