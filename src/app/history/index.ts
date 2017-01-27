import {Component} from '@angular/core';
import {HistoryComponent} from './history.ts';

@Component({
  selector: 'history-app',
  moduleId: __moduleName,
  templateUrl: 'index.html',
  directives: [HistoryComponent]
})
export class HistoryIndexComponent {}
