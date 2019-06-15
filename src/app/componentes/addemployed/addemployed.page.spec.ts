import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployedPage } from './addemployed.page';

describe('AddemployedPage', () => {
  let component: AddemployedPage;
  let fixture: ComponentFixture<AddemployedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
