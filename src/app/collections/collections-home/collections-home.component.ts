import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  toto = 'striped celled'

  data = [
    {name:'toto', age:24, job:'Disigner',employed: true},
    {name:'Jill', age:26, job:'Engineer',employed: true},
    {name:'ben la frite', age:24, job:'Disigner',employed: false},

  ];

  headers = [
    {key:'name', label:'Name'},
    {key:'age', label:'Age'},
    {key:'job', label:'Job'},
    {key: 'employed', label:'Has a Job ?'}


  ];



  constructor() { }

  ngOnInit(): void {
  }

}
