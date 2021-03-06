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
  @Output()  itmedelete = new EventEmitter<number>()
  @Output()  isboss = new EventEmitter<number>()
  @Output()  detelItnefm = new EventEmitter<Jiraff>()

  ngOnInit(): void {
    setInterval(()=>{
    this.clickcolor.emit(this.jiraff.color);
    this.bak=this.jiraff.color
  },2000*this.jiraff.id)}

  
  detelItne(j){
    console.log("what is click :"+ j);
    
    this.detelItnefm.emit(j)
  }

  clickItme(color){
    console.log(color);
    this.bak =color
    
    this.clickcolor.emit(color);
  }
  clickDelete(id){
   this.itmedelete.emit(id)
  }
  clickboss(id){
    this.isboss.emit(id)
  }

}
