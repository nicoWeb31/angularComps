import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-mods',
  templateUrl: './home-mods.component.html',
  styleUrls: ['./home-mods.component.css']
})
export class HomeModsComponent implements OnInit {

  modalOpen = false;
  items = [
    {title:'Why',content:'and why not, are you police officer'},
    {title:'Why the sky is blue',content:'the sky is blue because it is! '},
    {title:'What does an orange taste like ?',content:'An orange tastes like an orange'},
  ]




  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen
  }

}
