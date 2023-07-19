import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostAffectedCardComponent } from './most-affected-card.component';

describe('MostAffectedCardComponent', () => {
  let component: MostAffectedCardComponent;
  let fixture: ComponentFixture<MostAffectedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostAffectedCardComponent]
    });
    fixture = TestBed.createComponent(MostAffectedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
