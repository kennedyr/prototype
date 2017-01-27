import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {TableSectionComponent} from './components/table-section.ts';

@Component({
  selector: 'history-app',
  moduleId: __moduleName,
  templateUrl: 'index.html',
  directives: [
    NgClass,
    TableSectionComponent
  ]
})
export class DemoComponent {
}
