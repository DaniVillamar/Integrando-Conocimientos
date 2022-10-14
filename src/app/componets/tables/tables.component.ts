import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cursos } from '../models/curso';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  cursos:Cursos[]=[{
    nombre: 'Angular',
    comision: '35asd',
    profesor: 'Cristian',
    fechaInicio: new Date(2022,0,1),
  },{
    nombre: 'Angular',
    comision: '36asd',
    profesor: 'Cristian',
    fechaInicio: new Date(2022,0,1),
  },{
    nombre: 'Angular',
    comision: '37asd',
    profesor: 'Cristian',
    fechaInicio: new Date(2022,0,1),
  }
];
columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio'];
dataSource: MatTableDataSource<Cursos> = new MatTableDataSource<Cursos>(this.cursos)
  constructor() { }

  ngOnInit(): void {
  }
  filtrarCurso(){

  }
  filtrarComision(){

  }
}
