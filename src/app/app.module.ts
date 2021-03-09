import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {app_routing} from "./app.routes";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { FooterComponent } from './components/footer/footer.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    MascotasComponent,
    FooterComponent,
    BienvenidaComponent,
    BarraNavComponent,
    InicioComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
