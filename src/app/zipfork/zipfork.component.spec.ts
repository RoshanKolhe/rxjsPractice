import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipforkComponent } from './zipfork.component';

describe('ZipforkComponent', () => {
  let component: ZipforkComponent;
  let fixture: ComponentFixture<ZipforkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipforkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipforkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
