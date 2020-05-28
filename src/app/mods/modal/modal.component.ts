import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  //output pour remonter vers le parent emitter pour passer la methode
  @Output() close = new EventEmitter();

  constructor(
    private el: ElementRef
  ) {

    //console.log(el)

  }


  closeModal(){
    //this.el.nativeElement.remove();
    this.close.emit();

  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }



  ngOnDestroy(){
    this.el.nativeElement.remove();
  }



}
