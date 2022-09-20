import { Component, OnInit } from '@angular/core';
import { FirstfiddleService } from '../firstfiddle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:any;
  constructor(private s:FirstfiddleService) { }

  ngOnInit(): void {
    this.name=this.s.name
    console.log(this.name);
  }
  
}
