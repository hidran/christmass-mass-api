import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedeleDetailComponent } from './fedele-detail.component';

describe('FedeleDetailComponent', () => {
  let component: FedeleDetailComponent;
  let fixture: ComponentFixture<FedeleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FedeleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FedeleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
