import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cathome } from './cathome';

describe('Cathome', () => {
  let component: Cathome;
  let fixture: ComponentFixture<Cathome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cathome],
    }).compileComponents();

    fixture = TestBed.createComponent(Cathome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
