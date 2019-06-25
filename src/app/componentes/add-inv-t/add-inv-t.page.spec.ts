import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvTPage } from './add-inv-t.page';

describe('AddInvTPage', () => {
  let component: AddInvTPage;
  let fixture: ComponentFixture<AddInvTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
