import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesPage } from './add-sales.page';

describe('AddSalesPage', () => {
  let component: AddSalesPage;
  let fixture: ComponentFixture<AddSalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
