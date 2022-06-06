import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './3.html',
  styleUrls: ['./3.css']
})
export class pagina3 implements OnInit {

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

  pagina2(){
    this.router.navigate(["/pagina2"]);
  }
  paginaSiguiente(){
    this.router.navigate(["/pagina4"]);
  }
  paginaFinal(){
    this.router.navigate(["/pagina5"]);
  }
}