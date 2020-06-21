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

  deletej(id_j){
    let index =this. jiraffArr.findIndex(j => id_j==j.id)
    this.jiraffArr.splice(index,1);
  }
  


  jiraffArr:Jiraff[] =[
  // new Jiraff()
  {id:1,name:"moshe",color:"red"},
  {id:2,name:"chaim",color:"Azure"},
  {id:3,name:"jiraff",color:"blue"},
  {id:4,name:"jojo",color:"BlueViolet"},
  {id:5,name:"gogo",color:"Orange"},
  {id:6,name:"lavi",color:"Beige"},
  {id:7,name:"talger",color:"Coral"},
  {id:8,name:"beroch",color:"DarkGray"},
  {id:9,name:"jeron",color:"DarkKhaki"},
  {id:10,name:"golon",color:"DarkSeaGreen"},
  {id:11,name:"leon",color:"DarkOrange"},
  {id:12,name:"podel",color:"DarkSalmon"}
  ]
}

export class Jiraff {
  id:number
  name :string
  color:string
}