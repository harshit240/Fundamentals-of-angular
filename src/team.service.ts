import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }
  
  students:any[]=[
    {id:1,name:'Himanshu',age:22,email:'601himanshusahu@gmail.com'},
    {id:2,name:'aman',age:23,email:'601himanshusahu@gmail.com'},
    {id:3,name:'vijay',age:24,email:'601himanshusahu@gmail.com'},
    {id:4,name:'aakash',age:27,email:'601himanshusahu@gmail.com'},
  ]
  
}
