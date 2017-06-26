import { LocationAppPage } from './app.po';

describe('location-app App', () => {
  let page: LocationAppPage;

  beforeEach(() => {
    page = new LocationAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
