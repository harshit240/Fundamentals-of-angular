import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  // @Input() message!:string;
  // @Input() student:any;
  @Output() event = new EventEmitter<any>()
  constructor() { }
  
  ngOnInit(): void {
  }
  message="Hello Sending message from child"
  sendMessage(){
    this.event.emit(this.message);
  }

}