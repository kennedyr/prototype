import {Component, OnInit} from '@angular/core';
import {NG_TABLE_DIRECTIVES} from 'ng2-table/ng2-table';
import { TableData } from './history-data';

@Component({
  selector: 'table-history',
  moduleId: __moduleName,
  templateUrl: 'history.html',
  directives: [NG_TABLE_DIRECTIVES]
})

export class HistoryComponent implements OnInit {
  public rows: Array<any> = [];
  public columns: Array<any> = [
    { title: 'Time', name: 'Time' },
    { title: 'User', name: 'User', sort: false },
    { title: 'PartNumber', name: 'PartNo' },
    { title: 'Description', name: 'Description', sort: '' },
    { title: 'Customer', name: 'Cust' },
    { title: 'AKA', name: 'AKA' },
    { title: 'Price', name: 'Price' },
    { title: 'Unit of Measure', name: 'UOM' },
    { title: 'Unit Price', name: 'Price Each' },
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    className: ['table-striped', 'table-bordered']
  };

  private data: Array<any> = TableData;

  public constructor() {
    this.length = this.data.length;
  }

  public ngOnInit(): void {
    this.onChangeTable(this.config);
  }

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
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
      if (columns[i].sort !== '' && columns[i].sort !== false) {
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

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let sortedData = this.changeSort(this.data, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}
