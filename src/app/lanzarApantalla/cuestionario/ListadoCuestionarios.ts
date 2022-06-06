import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './listadocuestionarios.html',
  styleUrls: ['./listadocuestionarios.css']
})
export class CuestionarioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  EditarCuestionario(){
  this.router.navigate(["/editarCuestionario"]);
  }

  EliminarCuestionario(){

  }
  AgregarCuestionario(){
    this.router.navigate(["/agregarCuestionario"]);
  }

  enviaraResultados(){

  }
}
