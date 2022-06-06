import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { editarCuestionarioComponent } from './editarcuestionario/editarcuestionario.component';
import { CuestionarioComponent } from './lanzarApantalla/cuestionario/ListadoCuestionarios';
import { agregarCuestionarioComponent } from './add/cuestionario/agregarcuestionario.component';
import { pagina2 } from './add/cuestionario/paginasagregar/2';
import { pagina3 } from './add/cuestionario/paginasagregar/3';
import { pagina4 } from './add/cuestionario/paginasagregar/4';
import { pagina5 } from './add/cuestionario/paginasagregar/5';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full'},
  { path: 'lanzarApantalla', component: CuestionarioComponent},
  { path: 'editarCuestionario', component: editarCuestionarioComponent},
  { path: 'agregarCuestionario', component: agregarCuestionarioComponent},
  { path: 'pagina2', component: pagina2},
  { path: 'pagina3', component: pagina3},
  { path: 'pagina4', component: pagina4},
  { path: 'pagina5', component: pagina5},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
