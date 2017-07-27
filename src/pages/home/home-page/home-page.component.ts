import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"index":19,
    "randomindex":1,
    "name":"刘雨飏",
      "sex":"Male",
      "name_en":"Ryane",
      "github":"ryanemax",
      "exam1":66,
      "exam2":66,
      "exam3":66},
      {"index":7,
      "name":"小明",
      "sex":"Male",
      "name_en":"Ryane",
      "github":"ryanemax",
      "exam1":66,
      "exam2":66,
      "exam3":66},
      {"index":14,
      "name":"Chunk",
      "sex":"Male",
      "name_en":"Chunk",
      "github":"chunk",
      "exam1":76,
      "exam2":76,
      "exam3":76}
  ]
deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({
    "randomindex":1,
     "index":666,
      "name":"New User",
      "sex":"Male",
      "name_en":"new_user",
      "github":"new_user",
      "exam1":76,
      "exam2":76,
      "exam3":76
  })
}
  sortByAsccending(){
    this.users.sort(function(a,b){
    return a.index - b.index;
    }) 
  }
  sortByDesccending(){
    this.users.sort(function(a,b){
    return b.index - a.index;
    }); 
  }
  sortByRadom(){
    function shuffle(a) {
    for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
    } 
    } 
    shuffle(this.users);
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
