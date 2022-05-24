import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrepartieComponent } from './contrepartie.component';

describe('ContrepartieComponent', () => {
  let component: ContrepartieComponent;
  let fixture: ComponentFixture<ContrepartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContrepartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrepartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
