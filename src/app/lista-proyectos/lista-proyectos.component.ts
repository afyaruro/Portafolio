import { Component, OnInit } from '@angular/core';
import Proyecto from '../Modelo/proyecto';
import { ProyectosService } from '../Service/proyectos.service';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {

  proyectos: Proyecto[];

  constructor(private proyectoService: ProyectosService) {
    this.proyectos = [];
    
   }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(
      proyectos => {
        this.proyectos = proyectos
      }
    )
  }

}
