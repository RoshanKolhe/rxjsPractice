import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternamLibComponent } from './externam-lib.component';

describe('ExternamLibComponent', () => {
  let component: ExternamLibComponent;
  let fixture: ComponentFixture<ExternamLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternamLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternamLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
