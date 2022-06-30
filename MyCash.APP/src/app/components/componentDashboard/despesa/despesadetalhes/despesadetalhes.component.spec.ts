import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesadetalhesComponent } from './despesadetalhes.component';

describe('DespesadetalhesComponent', () => {
  let component: DespesadetalhesComponent;
  let fixture: ComponentFixture<DespesadetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesadetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesadetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
