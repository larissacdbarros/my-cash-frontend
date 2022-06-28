import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitalistComponent } from './receitalist.component';

describe('ReceitalistComponent', () => {
  let component: ReceitalistComponent;
  let fixture: ComponentFixture<ReceitalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
