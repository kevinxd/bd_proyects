import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprovidersPage } from './addproviders.page';

describe('AddprovidersPage', () => {
  let component: AddprovidersPage;
  let fixture: ComponentFixture<AddprovidersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprovidersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprovidersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
