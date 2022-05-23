import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordAddComponent } from './accord-add.component';

describe('AccordAddComponent', () => {
  let component: AccordAddComponent;
  let fixture: ComponentFixture<AccordAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
