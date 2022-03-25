import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  childUserName = '';

 username ='jose';
password2 = 'one';
onPushDown()
{
  this.childUserName = this.username;
}

onReceivedPassword(password: any){
  console.log("passwordReceived " + password)
  console.log("password local is " + this.password2)
  this.password2 = password;
}
constructor() { }

ngOnInit(): void {
}
}
