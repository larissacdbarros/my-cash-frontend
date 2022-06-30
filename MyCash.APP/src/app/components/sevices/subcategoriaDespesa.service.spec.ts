/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubcategoriaDespesaService } from './subcategoriaDespesa.service';

describe('Service: SubcategoriaDespesa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubcategoriaDespesaService]
    });
  });

  it('should ...', inject([SubcategoriaDespesaService], (service: SubcategoriaDespesaService) => {
    expect(service).toBeTruthy();
  }));
});
