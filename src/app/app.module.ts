import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConocemeComponent } from './componets/conoceme/conoceme.component';
import { RedesComponent } from './componets/redes/redes.component';
import { ConocimientosComponent } from './componets/conocimientos/conocimientos.component';
import { NombresComponent } from './componets/nombres/nombres.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConocemeComponent,
    RedesComponent,
    ConocimientosComponent,
    NombresComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
