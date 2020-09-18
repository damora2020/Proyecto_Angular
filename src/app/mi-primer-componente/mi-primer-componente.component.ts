import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit {

  /*arreglo = ['Daniel', 'Jairo', 23, false, 'Final'];*/

  // tslint:disable-next-line: no-inferrable-types

  nombre: string = 'Gilberto Santa Rosa';
  edad: number = 26;




  name: string = 'Daniel';
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbie: string[];

  constructor() {
    this.age = 26,
    this.address = {

      street : 'Calle 11 # 20 - 15',
      city : 'Bogotá'
    },

    this.hobbie = ['Nadar', 'Correr', 'Gym'];

  }

  ngOnInit(): void {
  }

}
