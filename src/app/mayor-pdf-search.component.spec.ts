import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MayorPdfSearchAppComponent } from '../app/mayor-pdf-search.component';

beforeEachProviders(() => [MayorPdfSearchAppComponent]);

describe('App: MayorPdfSearch', () => {
  it('should create the app',
      inject([MayorPdfSearchAppComponent], (app: MayorPdfSearchAppComponent) => {
    expect(app).toBeTruthy();
  }));

  //it('should have as title \'mayor-pdf-search works!\'',
  //    inject([MayorPdfSearchAppComponent], (app: MayorPdfSearchAppComponent) => {
  //  expect(app.title).toEqual('mayor-pdf-search works!');
  //}));
});
