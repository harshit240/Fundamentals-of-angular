import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  text='vikas jain'
  a='123456'
  name='pn'
}
