import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvPage } from './add-inv.page';

describe('AddInvPage', () => {
  let component: AddInvPage;
  let fixture: ComponentFixture<AddInvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
