import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPerfilComponent } from './inicio-perfil/inicio-perfil.component';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { ProyectosPortafolioComponent } from './proyectos-portafolio/proyectos-portafolio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioPerfilComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'NuevoProyecto', component: ProyectosPortafolioComponent},
  { path: 'ListaProyectos', component: ListaProyectosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
