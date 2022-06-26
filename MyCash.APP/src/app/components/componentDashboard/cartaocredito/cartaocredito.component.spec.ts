import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaocreditoComponent } from './cartaocredito.component';

describe('CartaocreditoComponent', () => {
  let component: CartaocreditoComponent;
  let fixture: ComponentFixture<CartaocreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaocreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaocreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
