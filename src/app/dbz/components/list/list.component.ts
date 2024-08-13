import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
constructor() { }

  ngOnInit() {
  }
  @Input()
  public characterList : Character[]=[
    {name:'Anacleto',
    power: 7000
    }
  ];

  //  onDeletePersonaje(index: number):void{
  //   console.log({index});
  //   // this.onDeleteRow.emit (index);
  //   this.onDeleteRow.emit (index);
  //  }
   onDeletePersonajePorId(id: string):void{
    console.log({id});
    // this.onDeleteRow.emit (index);
    this.onDeleteRow.emit (id);
   }

   @Output()
  //  onDeleteRow: EventEmitter<number>= new EventEmitter();
  onDeleteRow: EventEmitter<string>= new EventEmitter();

}
