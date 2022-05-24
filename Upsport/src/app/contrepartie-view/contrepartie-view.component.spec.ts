import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrepartieViewComponent } from './contrepartie-view.component';

describe('ContrepartieViewComponent', () => {
  let component: ContrepartieViewComponent;
  let fixture: ComponentFixture<ContrepartieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContrepartieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrepartieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
