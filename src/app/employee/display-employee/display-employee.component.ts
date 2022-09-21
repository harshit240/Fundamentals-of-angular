import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  form:any;  
  data:any;
  data1:any;
  constructor(private a: EmployeeService) { }
  
  ngOnInit(): void {
    this.form=new FormGroup({
    title:new FormControl(''),
    description:new FormControl(''),
    body:new FormControl(''),
  })

  this.a.showdata().
  subscribe(data=>{console.log(data)
  this.data=data
  this.data1=this.data.getall

  // console.log(this.data);

})
  
  }
  addblog()
  {
  // console.log(this.form.value);
  
  
  
  this.a.bloginsert(this.form.value).subscribe((res)=>{
    console.log(res);
  })
  


  }
}