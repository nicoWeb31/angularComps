import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home-component',
  templateUrl: './views-home-component.component.html',
  styleUrls: ['./views-home-component.component.css']
})
export class ViewsHomeComponentComponent implements OnInit {

  stats = [
    { value:22, label:'# of users'},
    { value:900, label:'Revenue'},
    { value:50, label:'Reviews'},

  ];

  items = [
    {image:'/assets/images/couch.jpeg',title:'Couch',descr:'this is a fantastic coutch to sit home'},
    {image:'/assets/images/dresser.jpeg',title:'Dresser',descr:'this is a great dresser to put stuff in'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
