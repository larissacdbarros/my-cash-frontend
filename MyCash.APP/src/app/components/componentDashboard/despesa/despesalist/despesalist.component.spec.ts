import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesalistComponent } from './despesalist.component';

describe('DespesalistComponent', () => {
  let component: DespesalistComponent;
  let fixture: ComponentFixture<DespesalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
