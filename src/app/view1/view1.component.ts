import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  id:any;
  constructor(private a:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.a.snapshot.paramMap.get('id')
    console.log(this.id);
  }

}
