import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoApp1Component } from './info-app1.component';

describe('InfoApp1Component', () => {
  let component: InfoApp1Component;
  let fixture: ComponentFixture<InfoApp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoApp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
