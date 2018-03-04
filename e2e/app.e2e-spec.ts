import { AeFrontendTexteditorAngularjsSkeletonPage } from './app.po';

describe('ae-frontend-texteditor-angularjs-skeleton App', function() {
  let page: AeFrontendTexteditorAngularjsSkeletonPage;

  beforeEach(() => {
    page = new AeFrontendTexteditorAngularjsSkeletonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
