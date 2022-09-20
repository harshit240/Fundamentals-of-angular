import { Component, OnInit } from '@angular/core';
import { ItmService } from 'src/itm.service';
import { FirstfiddleService } from '../firstfiddle.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  name:any;
  
  constructor( private s:FirstfiddleService ) { }

  ngOnInit(): void {
    //First fiddle service code
    this.name=this.s.name
    console.log(this.name);

   

  }

}
