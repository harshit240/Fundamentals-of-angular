import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  data:any;
  constructor(private ser:TeacherService) { }

  ngOnInit(): void {
      this.ser.getdata().subscribe((res)=>{
      // console.log(res);
      this.data = res
    })
  }


}
