import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathsVsTotalPopulationCardComponent } from './deaths-vs-total-population-card.component';

describe('DeathsVsTotalPopulationCardComponent', () => {
  let component: DeathsVsTotalPopulationCardComponent;
  let fixture: ComponentFixture<DeathsVsTotalPopulationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeathsVsTotalPopulationCardComponent]
    });
    fixture = TestBed.createComponent(DeathsVsTotalPopulationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
