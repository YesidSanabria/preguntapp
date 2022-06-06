import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './editarcuestionario.component.html',
  styleUrls: ['./editarcuestionario.component.css']
})
export class editarCuestionarioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  enviaraCuestionarios(){
    this.router.navigate(["/lanzarApantalla"]);
  }


  Guardar(){
    
  }
}
