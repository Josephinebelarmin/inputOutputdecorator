import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() username = '';
  @Output() passwordEmitter2 = new EventEmitter<any>();
 password = '';
  grandChildUsername = '';

  onPushDown(){
    this.grandChildUsername = this.username; 
  }

  onPasswordReceived(password :any){
    this.password = password;
     }
  
     onPullUp(){
       this.passwordEmitter2.emit(this.password)
     }
  constructor() { 
  
  }

  ngOnInit(): void {
    
  }

  
}
