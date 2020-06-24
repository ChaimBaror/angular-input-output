import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-j-page',
  templateUrl: './j-page.component.html',
  styleUrls: ['./j-page.component.css']
})
export class JPageComponent implements OnInit {

  detelfm : Jiraff
  bakColor: string
  constructor() { }

  ngOnInit(): void {
  }

  deletej(id_j) {

    let index = this.jiraffArr.findIndex(j => id_j == j.id)
    this.jiraffArr.splice(index, 1);
  }

  boss(id) {
    for (let i = 0; i < this.jiraffArr.length; i++) {
      if (this.jiraffArr[i].id == id) {
        this.jiraffArr[i].isBossy = this.jiraffArr[i].isBossy ? false : true
      }
    }
  }

  add(itme){
    this.jiraffArr.push(itme)
  }



  jiraffArr: Jiraff[] = [
    // new Jiraff()
    { id: 1, name: "moshe", color: "red", isBossy: false },
    { id: 2, name: "chaim", color: "Azure", isBossy: true },
    { id: 3, name: "jiraff", color: "blue" },
    { id: 4, name: "jojo", color: "BlueViolet" },
    { id: 5, name: "gogo", color: "GreenYellow", isBossy: false },
    { id: 6, name: "lavi", color: "Beige" },
    { id: 7, name: "talger", color: "Coral" },
    { id: 8, name: "beroch", color: "DarkGray" },
    { id: 9, name: "jeron", color: "DarkKhaki", isBossy: false },
    { id: 10, name: "golon", color: "DarkSeaGreen" },
    { id: 11, name: "leon", color: "DarkOrange", isBossy: false },
    { id: 12, name: "podel", color: "Gold", isBossy: false }
  ]
}

export class Jiraff {
  id: number
  name: string
  color: string
  isBossy?: boolean
}