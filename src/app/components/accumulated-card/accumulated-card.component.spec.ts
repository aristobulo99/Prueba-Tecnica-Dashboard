import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulatedCardComponent } from './accumulated-card.component';

describe('AccumulatedCardComponent', () => {
  let component: AccumulatedCardComponent;
  let fixture: ComponentFixture<AccumulatedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccumulatedCardComponent]
    });
    fixture = TestBed.createComponent(AccumulatedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
