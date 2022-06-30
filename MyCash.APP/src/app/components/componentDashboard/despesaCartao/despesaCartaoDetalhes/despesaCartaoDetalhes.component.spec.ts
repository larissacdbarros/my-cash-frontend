/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DespesaCartaoDetalhesComponent } from './despesaCartaoDetalhes.component';

describe('DespesaCartaoDetalhesComponent', () => {
  let component: DespesaCartaoDetalhesComponent;
  let fixture: ComponentFixture<DespesaCartaoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaCartaoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaCartaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
