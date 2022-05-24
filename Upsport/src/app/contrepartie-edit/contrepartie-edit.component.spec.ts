import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrepartieEditComponent } from './contrepartie-edit.component';

describe('ContrepartieEditComponent', () => {
  let component: ContrepartieEditComponent;
  let fixture: ComponentFixture<ContrepartieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContrepartieEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrepartieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
