import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  id:any;
  form:any;
  editdata:any;
  constructor(private a:ActivatedRoute,private ser:TeacherService,private route:Router) { }

  ngOnInit(): void {
      this.form=new FormGroup({
      title:new FormControl(''),
      body:new FormControl('')
    })


    this.id=this.a.snapshot.paramMap.get('id');
    // console.log(this.id);

  this.ser.teacher_view(this.id).subscribe((data)=>{
    // console.log(data);
    this.editdata =data     
    this.form.patchValue({  // patchvalue fn. is used to update only a subset of the elements of the FormGroup 
      title:this.editdata.title,
      body:this.editdata.body
    })
  })

  }
  update(){
    this.ser.updateblog(this.form.value,this.id).subscribe((res)=>{
    console.log(res);
    this.route.navigate(['/'])
  })
}

}