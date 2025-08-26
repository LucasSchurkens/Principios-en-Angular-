import { Component } from '@angular/core'; //modificador de la clase//

@Component({ // es un "Decorador"
  selector: 'app-bienvenida', // define el nombre con que se identifica el componente en HTML
  imports: [], // es donde se importa lo necesario para el componente
  templateUrl: './bienvenida.html', // la URL del HTML
  styleUrl: './bienvenida.css' // la URL del CSS
})
export class Bienvenida {

} // exporta la como clase nuestro componente para utilizarla y manipularla
