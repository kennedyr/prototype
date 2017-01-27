import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {TableDemoComponent} from './table/table-demo.ts';

@Component({
  selector: 'table-section',
  template: `
  <h2>Example</h2>
  <div class="card card-block panel panel-default panel-body">
    <table-demo></table-demo>
  </div>`,
  directives: [TableDemoComponent, CORE_DIRECTIVES]
})
export class TableSectionComponent {
  name: 'Table';
}
