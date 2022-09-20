import { Component, OnInit } from '@angular/core';
import { ItmService } from 'src/itm.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:any;
  students:any;
  data:any;
  constructor(private ser:ItmService) { }

  ngOnInit(): void {
    this.data=this.ser.students
    this.name=this.ser.name

  }
}
