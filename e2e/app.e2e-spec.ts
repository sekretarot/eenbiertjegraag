import { EenbiertjegraagPage } from './app.po';

describe('eenbiertjegraag App', () => {
  let page: EenbiertjegraagPage;

  beforeEach(() => {
    page = new EenbiertjegraagPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
