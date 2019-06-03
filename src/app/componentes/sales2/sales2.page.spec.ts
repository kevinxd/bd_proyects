import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sales2Page } from './sales2.page';

describe('Sales2Page', () => {
  let component: Sales2Page;
  let fixture: ComponentFixture<Sales2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sales2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sales2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
