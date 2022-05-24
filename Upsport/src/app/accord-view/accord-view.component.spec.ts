import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordViewComponent } from './accord-view.component';

describe('AccordViewComponent', () => {
  let component: AccordViewComponent;
  let fixture: ComponentFixture<AccordViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
