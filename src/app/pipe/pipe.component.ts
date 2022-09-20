import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  title='firstpart';

  constructor() { }
  ngOnInit(): void {
  }
  myname:string='How to be a developer'

  mydate=new Date(2000,10,13); // date  13 oct. 2000
  mynumber:number=67.44; //decimal number
  mycurrency:number=6744;
  
  mydata:any[]=
  [
    {id:1,name:'himanshu',city:'gwa'},
    {id:2,name:'krishna',city:'dba'},
    {id:3,name:'ram',city:'dta'},
    {id:4,name:'vijay',city:'bpl'}
  ];

}
