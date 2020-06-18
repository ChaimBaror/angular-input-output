import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-chlid-fn',
  templateUrl: './chlid-fn.component.html',
  styleUrls: ['./chlid-fn.component.css']
})
export class ChlidFnComponent implements OnInit {

  constructor() { }


  @Output() myEvent:EventEmitter<number>=new EventEmitter<number>()
  @Output() secondsCounter: EventEmitter<string>=new EventEmitter<string>()

  convertTo(str):void{
    let n = parseInt(str)
    this.myEvent.emit(n)
  }

  ngOnInit() {
  setInterval(()=>this.secondsCounter.emit(new Date().toLocaleTimeString()),1000)

  }

}
