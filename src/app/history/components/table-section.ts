import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {TableHistoryComponent} from './table/table-history.ts';

@Component({
  selector: 'table-section',
  moduleId: __moduleName,
  templateUrl: 'table-section.html',
  directives: [TableHistoryComponent, CORE_DIRECTIVES]
})
export class TableSectionComponent {
  name: 'Table';
}
