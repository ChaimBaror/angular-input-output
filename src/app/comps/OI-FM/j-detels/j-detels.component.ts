import { Component, OnInit, Input } from '@angular/core';
import { Jiraff } from '../j-page/j-page.component';

@Component({
  selector: 'j-detels',
  templateUrl: './j-detels.component.html',
  styleUrls: ['./j-detels.component.css']
})
export class JDetelsComponent implements OnInit {

  constructor() { }

  @Input() detel_j :Jiraff

  ngOnInit(): void {
  }

}
