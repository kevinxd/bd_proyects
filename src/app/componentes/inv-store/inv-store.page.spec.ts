import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvStorePage } from './inv-store.page';

describe('InvStorePage', () => {
  let component: InvStorePage;
  let fixture: ComponentFixture<InvStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvStorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
