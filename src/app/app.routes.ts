import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.ts';
import {ConfigureComponent} from './configure/configure.ts';
import {DemoComponent} from './history/index.ts';
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
    component: DemoComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  }
];

export const routing = RouterModule.forRoot(routes);
