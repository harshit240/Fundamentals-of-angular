import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  data:any;
  constructor( private b:ApiService) { }
  
  ngOnInit(): void {
    this.b.alldata().subscribe((res)=>{ // Subscribe data show karane k liye use kiya!
     // console.log(res);
      this.data=res;
      console.log(this.data);
    })
  }
  
}
