import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { JsonPipe } from '@angular/common';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  constructor( public dbzService : DbzService) { }

//  public characters: Character[]=[
//   { name:'Krilling',
//     power: 150
//   },
//   { name:'Goku',
//     power: 9500
//   },
//   { name:'Vegueta',
//     power: 7500
//   }
//  ]

// onNewPersonaje(personaje: Character):void{
//   console.log('MainPage');
//   console.log(personaje);
//   this.characters.push (personaje);
// }
// onDeleteIndexPersonaje(index:number):void{
//   this.characters.splice(index,1);
// }
}

