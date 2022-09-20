import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent implements OnInit {
  name="Himanshu"
  college="MITS"
  num1=3
  num2=5


  constructor() { }

  ngOnInit(): void {
  }

}
