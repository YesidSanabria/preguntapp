import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './2.html',
  styleUrls: ['./2.css']
})
export class pagina2 implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  enviaraCuestionarios(){
    this.router.navigate(["/lanzarApantalla"]);
  }
  pagina1(){
    this.router.navigate(["/agregarCuestionario"]);
  }

  pagina3(){
    this.router.navigate(["/pagina3"]);
  }
  paginaSiguiente(){
    this.router.navigate(["/pagina3"]);
  }
  paginaFinal(){
    this.router.navigate(["/pagina5"]);
  }
}