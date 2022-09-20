import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id:any;
  // viewdata1:any;
  // viewdata2:any;

  constructor( private a:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.a.snapshot.paramMap.get('id')
    console.log(this.id);
  }

}
