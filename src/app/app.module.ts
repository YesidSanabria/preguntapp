import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { agregarCuestionarioComponent } from './add/cuestionario/agregarcuestionario.component';
import { PreguntaComponent } from './add/pregunta/pregunta.component';
import { ResultadosComponent } from './lanzarApantalla/resultados/resultados.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    agregarCuestionarioComponent,
    PreguntaComponent,
    ResultadosComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
