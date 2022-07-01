/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagarFaturaComponent } from './pagarFatura.component';

describe('PagarFaturaComponent', () => {
  let component: PagarFaturaComponent;
  let fixture: ComponentFixture<PagarFaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarFaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
