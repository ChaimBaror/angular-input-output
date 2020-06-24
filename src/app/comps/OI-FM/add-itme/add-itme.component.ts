import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Jiraff } from '../j-page/j-page.component';

@Component({
  selector: 'add-itme',
  templateUrl: './add-itme.component.html',
  styleUrls: ['./add-itme.component.css']
})
export class AddItmeComponent implements OnInit {
 
  constructor() { }

  @Output() newItemEvent = new EventEmitter<Jiraff>();

  ngOnInit(): void {
  }

  addNewItem(name: string, id: number, color: string, boos: boolean) {
let value = new Jiraff()
   value.name = name
    value.id = id
    value.color = color
    value.isBossy = boos

    console.log(value);

    this.newItemEvent.emit(value);
  }

}
