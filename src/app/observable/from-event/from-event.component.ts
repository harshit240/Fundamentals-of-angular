import { literalMap } from '@angular/compiler';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ObservableServiceService } from '../service/observable-service.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {
  @ViewChild('addbtn') addbtn!:ElementRef;
  constructor(private obsser:ObservableServiceService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let count =1;
    fromEvent(this.addbtn.nativeElement,'click').subscribe((res)=>{
      let countval = 'video ' + count++ 
      console.log(countval);
      this.obsser.print(countval,'elContainer3')
    })
  }


}
