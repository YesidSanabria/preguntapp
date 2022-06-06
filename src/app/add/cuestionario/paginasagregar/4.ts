import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './4.html',
  styleUrls: ['./4.css']
})
export class pagina4 implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  enviaraCuestionarios(){
    this.router.navigate(["/lanzarApantalla"]);
  }
  paginaInicial(){
    this.router.navigate(["/agregarCuestionario"]);
  }

  pagina2(){
    this.router.navigate(["/pagina2"]);
  }
  pagina3(){
    this.router.navigate(["/pagina3"]);
  }
  pagina5(){
    this.router.navigate(["/pagina5"]);
  }
}