import {Component} from '@angular/core';
import {TableData} from './table-data.ts';

@Component({
  selector: 'table-history',
  moduleId: __moduleName,
  templateUrl: 'table-history.html'
})

export class TableHistoryComponent {
  public rows: Array<any> = [];
  public columns: Array<any> = [
    { title: 'Time', name: 'Time' },
    { title: 'User', name: 'User' },
    { title: 'PartNumber', name: 'PartNo' },
    { title: 'Description', name: 'Description' },
    { title: 'Customer', name: 'Cust' },
    { title: 'AKA', name: 'AKA' },
    { title: 'Price', name: 'Price' },
    { title: 'Unit of Measure', name: 'UOM' },
    { title: 'Unit Price', name: 'PriceEach' }
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '', columnName: 'PartNo' }
  };

  private data: Array<any> = TableData;

  public constructor() {
    this.length = this.data.length;
  }

  public ngOnInit(): void {
    this.onChangeTable(this.config);
  }

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    console.log(page);
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '') {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    if (!config.filtering) {
      return data;
    }

    let filteredData: Array<any> = data.filter((item: any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));


    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }
}
