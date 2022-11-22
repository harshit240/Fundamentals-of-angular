import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  @ViewChild('box')
  box!: ElementRef;
  username!:string;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor="red";
    // this.box.nativeElement.innerHTML="This is Modified HTML"
  }

}
