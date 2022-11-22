import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 

  title = 'Hyy I am parent';

  students:any[]=[
    {id:1,name:'Himanshu',age:22,email:'601himanshusahu@gmail.com',address:"gwalior" },
    {id:2,name:'aman',age:23,email:'601himanshusahu@gmail.com',address:"indore"},
    {id:3,name:'vijay',age:24,email:'601himanshusahu@gmail.com',address:"bhopal"},
    {id:4,name:'aakash',age:27,email:'601himanshusahu@gmail.com',address:"datia"},
  ]

  showdata(){
    console.log("Hello Himanshu!");
  }
  data="Hello Bhai"

  //Receiving message from child
  
  Childmessage:any;
  receiveMessage($event:any){
    this.Childmessage = $event
  }


   
}
