import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {
  id:any;
  teacherview:any;
  constructor(private ser:TeacherService,private r:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.r.snapshot.paramMap.get('id');
    // console.log(this.id);
    this.ser.teacher_view(this.id).subscribe((res)=>{
      // console.log(res);
      this.teacherview=res;
      console.log(this.teacherview);
      })
  }

}
