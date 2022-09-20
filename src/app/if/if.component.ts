import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {
  show=true;
  department='computer'
  constructor() { }

  ngOnInit(): void {
  }

}
