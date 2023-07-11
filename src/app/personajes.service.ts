import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  //id del personaje del que se obtiene todo el detalle completo
  id: number = 0;

  constructor(private http: HttpClient) {}
  
  //GET para cargar todos los characters en characters.component
  obtener() {
    return this.http.get(
      'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8'
    );
  }
  //detalle completo para detalle.component
  detalleId(id: any) {
    this.id = id;
    let get = 'https://rickandmortyapi.com/api/character/' + id;
    return this.http.get(get);
  }
}
