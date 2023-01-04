import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Proyecto from '../Modelo/proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private firestore: Firestore) { }

  addProyecto(proyecto: Proyecto){

    const proyectoRef = collection(this.firestore, 'Proyectos');
    return addDoc(proyectoRef, proyecto)

  }

  getProyecto(): Observable<Proyecto[]>{
    const proyectoRef = collection(this.firestore, 'Proyectos');
    return collectionData(proyectoRef, {idField: 'id'}) as Observable<Proyecto[]>;
  }


}
