import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadboardComponent } from './headboard.component';

describe('HeadboardComponent', () => {
  let component: HeadboardComponent;
  let fixture: ComponentFixture<HeadboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadboardComponent]
    });
    fixture = TestBed.createComponent(HeadboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
