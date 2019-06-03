import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedPage } from './employed.page';

describe('EmployedPage', () => {
  let component: EmployedPage;
  let fixture: ComponentFixture<EmployedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
