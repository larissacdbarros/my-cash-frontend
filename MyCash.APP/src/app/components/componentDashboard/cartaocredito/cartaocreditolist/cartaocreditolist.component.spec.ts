import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaocreditolistComponent } from './cartaocreditolist.component';

describe('CartaocreditolistComponent', () => {
  let component: CartaocreditolistComponent;
  let fixture: ComponentFixture<CartaocreditolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaocreditolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaocreditolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
