import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book50 } from './book50';

describe('Book50', () => {
  let component: Book50;
  let fixture: ComponentFixture<Book50>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Book50]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Book50);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
