import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() datas = [];
  openedItemsIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index :number){

    if(index === this.openedItemsIndex){
      this.openedItemsIndex = -1;
    }else{

      this.openedItemsIndex = index;
    }

  }

}
