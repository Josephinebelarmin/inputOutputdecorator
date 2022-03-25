import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {
  @Input() username = '';
 password = '';
  @Output() passwordEmitter = new EventEmitter<any>() ;

  onPullUp(){
this.passwordEmitter.emit(this.password);
  }

  constructor() { }

  ngOnInit(): void {
  }

}


