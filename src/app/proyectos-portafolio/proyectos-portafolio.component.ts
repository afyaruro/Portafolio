import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProyectosService } from '../Service/proyectos.service';

@Component({
  selector: 'app-proyectos-portafolio',
  templateUrl: './proyectos-portafolio.component.html',
  styleUrls: ['./proyectos-portafolio.component.css']
})
export class ProyectosPortafolioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private proyectoService: ProyectosService) {
    this.formulario = new FormGroup({
      nombre : new FormControl(),
      descripcion: new FormControl(),
      github: new FormControl(),
      link: new FormControl(),
      foto: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  async Crear(){
    console.log(this.formulario.value);
    const respuesta = await this.proyectoService.addProyecto(this.formulario.value);
    console.log(respuesta);

    alert("Proyecto Creado Exitosamente...")
  }

}
