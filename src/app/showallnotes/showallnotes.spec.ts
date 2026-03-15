import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showallnotes } from './showallnotes';

describe('Showallnotes', () => {
  let component: Showallnotes;
  let fixture: ComponentFixture<Showallnotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showallnotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showallnotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
