import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { InicioComponent } from './components/inicio/inicio.component';

const app_routes: Routes = [
{path: 'inicio', component: InicioComponent},
{path: 'nosotros', component: NosotrosComponent},
{path:'**', component: InicioComponent}
];
export const app_routing = RouterModule.forRoot(app_routes);