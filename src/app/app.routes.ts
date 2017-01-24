import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.ts';
import {ConfigureComponent} from './configure/configure.ts';
import {HistoryComponent} from './history/history.ts';
import {InventoryComponent} from './inventory/inventory.ts';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'configure',
    component: ConfigureComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  }
];

export const routing = RouterModule.forRoot(routes);
