import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { Search } from './search.pipe';

describe('Search Pipe', () => {
  beforeEachProviders(() => [Search]);

  it('should transform the input', inject([Search], (pipe: Search) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
