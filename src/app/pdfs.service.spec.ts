import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PdfsService } from './pdfs.service';

describe('Pdfs Service', () => {
  beforeEachProviders(() => [PdfsService]);

  it('should ...',
      inject([PdfsService], (service: PdfsService) => {
    expect(service).toBeTruthy();
  }));
});
