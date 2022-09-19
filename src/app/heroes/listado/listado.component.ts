import { Component, ValueSansProvider } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América', 'Pantera Negra'];
  heroeBorrado: string = '';
  
  borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
      
  }
}
