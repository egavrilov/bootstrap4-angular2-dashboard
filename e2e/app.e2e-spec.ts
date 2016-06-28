import { Bs4Ng2UiPage } from './app.po';

describe('bs4-ng2-ui App', function() {
  let page: Bs4Ng2UiPage;

  beforeEach(() => {
    page = new Bs4Ng2UiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
