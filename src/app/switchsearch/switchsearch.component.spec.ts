import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchsearchComponent } from './switchsearch.component';

describe('SwitchsearchComponent', () => {
  let component: SwitchsearchComponent;
  let fixture: ComponentFixture<SwitchsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
