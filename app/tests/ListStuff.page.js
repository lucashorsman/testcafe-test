import { Selector } from 'testcafe';

export class ListStuffPage {
  constructor() {
    this.pageId = '#list-stuff-nav';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasTable(testController) {
    const tableSelector = Selector('.table table-striped table-bordered table-hover');
    const rowSelector = tableSelector.find('tr');
    const rowCount = await rowSelector.count;
  
    return rowCount >= 2;
  }
}

export const liststuffPage = new ListStuffPage();
