import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConocemeComponent } from './componets/conoceme/conoceme.component';
import { RedesComponent } from './componets/redes/redes.component';
import { ConocimientosComponent } from './componets/conocimientos/conocimientos.component';
import { NombresComponent } from './componets/nombres/nombres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './componets/tables/tables.component';
import { CardsComponent } from './componets/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';

@NgModule({
  declarations: [
    AppComponent,
    ConocemeComponent,
    RedesComponent,
    ConocimientosComponent,
    NombresComponent,
    TablesComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
