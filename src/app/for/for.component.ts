import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students:any[]=[
    {id:1,name:'Himanshu',age:22,email:'601himanshusahu@gmail.com'},
    {id:2,name:'aman',age:23,email:'601himanshusahu@gmail.com'},
    {id:3,name:'vijay',age:24,email:'601himanshusahu@gmail.com'},
    {id:4,name:'aakash',age:27,email:'601himanshusahu@gmail.com'},
  ]
}
