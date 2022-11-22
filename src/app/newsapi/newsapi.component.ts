import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styleUrls: ['./newsapi.component.css']
})
export class NewsapiComponent implements OnInit {
  data:any;
  data1:any;
  constructor(private n:ApiService) { }

  ngOnInit(): void {
    this.n.newsdata().subscribe((res)=>{ // Subscribe, data show karane k liye use kiya!
      // console.log(res);
      this.data=res;
      // console.log(this.data);
      this.data1=this.data.articles
      console.log(this.data1);
     })
  }

}
