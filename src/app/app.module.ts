import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './app.routes.ts';
import {AppComponent} from './app.component.ts';
import {HistoryModule} from './history/index.module.ts';

import {HomeComponent} from './home.ts';
import {HeaderComponent} from './header.ts';
import {TitleComponent} from './title.ts';
import {FooterComponent} from './footer.ts';
import {ConfigureComponent} from './configure/configure.ts';
import {InventoryComponent} from './inventory/inventory.ts';


@NgModule({
  imports: [
    BrowserModule,
    routing,
    HistoryModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    ConfigureComponent,
    InventoryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
