import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesadeleteComponent } from './despesadelete.component';

describe('DespesadeleteComponent', () => {
  let component: DespesadeleteComponent;
  let fixture: ComponentFixture<DespesadeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesadeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesadeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
