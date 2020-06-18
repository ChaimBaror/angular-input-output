import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import { Jiraff } from '../j-page/j-page.component';

@Component({
  selector:'j-itme',
  templateUrl: './j-itme.component.html',
  styleUrls: ['./j-itme.component.css']
})
export class JItmeComponent implements OnInit {

  constructor() { }
  bak:string
  @Input() jiraff:Jiraff

  @Output() clickcolor = new EventEmitter<string>()

  ngOnInit(): void {
    this.clickcolor.emit(this.jiraff.color);
  }


  clickItme(color){
    console.log(color);
    this.bak =color
    
    this.clickcolor.emit(color);
  }
}
