import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chlid',
  templateUrl: './chlid.component.html',
  styleUrls: ['./chlid.component.css']
})
export class ChlidComponent implements OnInit {

  constructor() { }

  @Input() parent1:string=""
  @Input() parent2:string=""

  ngOnInit(): void {
  }

}
