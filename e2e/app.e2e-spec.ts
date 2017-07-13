import { NgUpgradePage } from './app.po';

describe('ng-upgrade App', () => {
  let page: NgUpgradePage;

  beforeEach(() => {
    page = new NgUpgradePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
