import { Injectable } from '@angular/core';

import{ v4 as uuid }   from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }


  public characters: Character[]=[
    {
      id : uuid(),
      name:'Krilling',
      power: 150
    },
    {
      id : uuid(),
      name:'Goku',
      power: 9500
    },
    {
      id : uuid(),
      name:'Vegueta',
      power: 7500
    }
   ]

  onNewPersonaje(personaje: Character):void{
    console.log('MainPage');
    console.log(personaje);
  //  esto es una forma de crear un nuevo personaje partiendo del que entra como parametro (asignandole el id que le falta)
    const nuevoP : Character = {
      id: uuid(),  //<-- asignamos  un id, ya que el parametro de entrada no lo trae
      name : personaje.name,  //<-- tomamos este campo del parametro de entrada
      power: personaje.power  //<-- tomamos este campo del parametro de entrada
    }
    // this.characters.push (nuevoP);
  //  esto es  otra orma de crear un nuevo personaje partiendo del que entra como parametro (asignandole el id que le falta)
  // es utilizando el operador spread : asignale el id y el resto de campos tomalos del parametro entrante
    const newPersonaje: Character = {
      id:uuid(), ...personaje
    }

    this.characters.push (newPersonaje);
  }
  // onDeleteIndexPersonaje(index:number):void{
  //   this.characters.splice(index,1);

    onDeletePersonajeById(id:string):void{          // <-- nueva version de borrado ahora buscando por id
      console.log(id);
      this.characters = this.characters.filter( personaje => personaje.id != id )//   <-- nos qudamos con todo el array menos el elemento de ese indice
      console.log (this.characters);
  }

}
