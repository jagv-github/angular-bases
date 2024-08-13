import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-addCharacter',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character>= new EventEmitter();

  public character: Character ={
    name : '',
    power: 23
  }
  emitCharacter():void{
 
    this.onNewCharacter.emit(this.character);

    console.log(this.character)
  }
}
