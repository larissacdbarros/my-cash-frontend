/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReceitadetalhesComponent } from './receitadetalhes.component';

describe('ReceitadetalhesComponent', () => {
  let component: ReceitadetalhesComponent;
  let fixture: ComponentFixture<ReceitadetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitadetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitadetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
