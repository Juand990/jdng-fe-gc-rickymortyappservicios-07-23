import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/personajes.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  //todos los personajes guardados por GET
  characters: any = null;

  constructor(private persService: PersonajesService) {}
  //personaje detalle que se envia al detalle.component
  charDetalle: any = [];

  //cargar la lista en el componente al abrir
  ngOnInit() {
    this.persService
      .obtener()
      .subscribe((result) => (this.characters = result));
  }
  //enviar por id, el detalle del personaje al detalle.component
  detalle(hero: any) {
    this.persService
      .detalleId(hero)
      .subscribe((result) => (this.charDetalle = result));
  }
}
