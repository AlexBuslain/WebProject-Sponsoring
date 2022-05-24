import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrepartieAddComponent } from './contrepartie-add.component';

describe('ContrepartieAddComponent', () => {
  let component: ContrepartieAddComponent;
  let fixture: ComponentFixture<ContrepartieAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContrepartieAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrepartieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
