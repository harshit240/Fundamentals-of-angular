import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form:any;
  constructor(private a :EmployeeService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
    title:new FormControl(''),
    description:new FormControl(''),
    body:new FormControl(''),
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