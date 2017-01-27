import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {TableSectionComponent} from './components/table-section.ts';

@Component({
  selector: 'app',
  template: `
  <div class="container">
    <h1>History Wrapper</h1>
    <table-section class="col-md-12"></table-section>
  </div>
  `,
  directives: [
    NgClass,
    TableSectionComponent
  ]
})
export class DemoComponent {
}
