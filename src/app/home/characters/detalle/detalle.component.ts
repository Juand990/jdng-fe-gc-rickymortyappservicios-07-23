import { Component,Input } from '@angular/core';
import { PersonajesService } from 'src/app/personajes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  data: any = [];
  id:any=this.persService.id;


  constructor(private persService:PersonajesService) {}

  ngOnInit(){
    if (this.id!=0) {
      this.persService.detalleId(this.id)
      .subscribe(result =>this.data =result);
    }   
  }




    

}
