import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './agregarcuestionario.component.html',
  styleUrls: ['./agregarcuestionario.component.css']
})
export class agregarCuestionarioComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }


  enviaraCuestionarios(){
    this.router.navigate(["/lanzarApantalla"]);
  }

  pagina2(){
    this.router.navigate(["/pagina2"]);
  }

  pagina3(){
    this.router.navigate(["/pagina3"]);
  }
  paginaSiguiente(){
    this.router.navigate(["/pagina2"]);
  }
  paginaFinal(){
    this.router.navigate(["/pagina5"]);
  }

}
