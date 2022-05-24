import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordEditComponent } from './accord-edit.component';

describe('AccordEditComponent', () => {
  let component: AccordEditComponent;
  let fixture: ComponentFixture<AccordEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
