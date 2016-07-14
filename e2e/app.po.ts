export class MayorPdfSearchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mayor-pdf-search-app h1')).getText();
  }
}
