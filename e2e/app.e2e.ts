import { MayorPdfSearchPage } from './app.po';

describe('mayor-pdf-search App', function() {
  let page: MayorPdfSearchPage;

  beforeEach(() => {
    page = new MayorPdfSearchPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mayor-pdf-search works!');
  });
});
