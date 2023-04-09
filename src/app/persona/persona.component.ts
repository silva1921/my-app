import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  nombre: String = 'Cristian';
  apellido: String = 'Silva';
  edad: number = 25;
  // private edad: number = 25;

  // Atributo privado
  // getEdad(): number {
  //   return this.edad;
  // }
}
