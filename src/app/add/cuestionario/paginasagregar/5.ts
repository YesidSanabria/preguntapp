import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './5.html',
  styleUrls: ['./5.css']
})
export class pagina5 implements OnInit {

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
  pagina4(){
    this.router.navigate(["/pagina4"]);
  }

}