import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './app.routes.ts';
import {AppComponent} from './app.component.ts';

import {HomeComponent} from './home.ts';
import {HeaderComponent} from './header.ts';
import {TitleComponent} from './title.ts';
import {FooterComponent} from './footer.ts';
import {ConfigureComponent} from './configure/configure.ts';
import {DemoComponent} from './history/index.ts';
import {InventoryComponent} from './inventory/inventory.ts';
import {TableSectionComponent} from './history/components/table-section.ts';
import {TableHistoryComponent} from './history/components/table/table-history.ts';
import {NG_TABLE_DIRECTIVES} from 'ng2-table';
import {Ng2BootstrapModule} from 'ng2-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    Ng2BootstrapModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    ConfigureComponent,
    DemoComponent,
    InventoryComponent,
    TableSectionComponent,
    TableHistoryComponent,
    NG_TABLE_DIRECTIVES
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
