import { AngExcercisesPage } from './app.po';

describe('ang-excercises App', () => {
  let page: AngExcercisesPage;

  beforeEach(() => {
    page = new AngExcercisesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
