import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombres',
  templateUrl: './nombres.component.html',
  styleUrls: ['./nombres.component.css']
})
export class NombresComponent implements OnInit {

  nombres: String[];

  constructor() {
    this.nombres = [];
   }
  
   anadirNombre(nombre: String){
    this.nombres.push(nombre);
    console.log('Se ha añadido el Nombre' + nombre);
    
   }
  ngOnInit(): void {
  }

}
