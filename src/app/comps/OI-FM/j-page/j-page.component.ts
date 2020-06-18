import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-j-page',
  templateUrl: './j-page.component.html',
  styleUrls: ['./j-page.component.css']
})
export class JPageComponent implements OnInit {


  bakColor :string
  constructor() { }

  ngOnInit(): void {
  }


  jiraffArr:Jiraff[] =[
  // new Jiraff()
  {id:1,name:"moshe",color:"red"},
  {id:2,name:"chaim",color:"Azure"},
  {id:3,name:"jiraff",color:"blue"},
  {id:4,name:"jojo",color:"BlueViolet"},
  {id:5,name:"gogo",color:"Orange"},
  {id:6,name:"lavi",color:"Beige"}
  ]
}

export class Jiraff {
  id:number
  name :string
  color:string
}