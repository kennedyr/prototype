import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HistoryComponent} from './index.ts';
import {TableHistoryComponent} from './components/table/table-history.ts';
import {TableSectionComponent} from './components/table-section.ts';
import {NG_TABLE_DIRECTIVES} from 'ng2-table';
import {Ng2BootstrapModule} from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    Ng2BootstrapModule.forRoot()
  ],
  declarations: [
    HistoryComponent,
    TableHistoryComponent,
    TableSectionComponent,
    NG_TABLE_DIRECTIVES
  ],
  exports: [
    HistoryComponent
  ]
})
export class HistoryModule {}
