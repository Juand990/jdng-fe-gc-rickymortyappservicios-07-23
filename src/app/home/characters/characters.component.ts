import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/personajes.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any = null;

  constructor(private persService:PersonajesService) {}

  charDetalle: any = [];

  ngOnInit(){
    this.persService.obtener()
    .subscribe(result =>this.characters =result);
  }

  detalle(hero: any) {
    this.persService.detalleId(hero)
    .subscribe(result =>this.charDetalle =result);
  }
}
