import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html',
  styleUrls: ['./reactive-form-array.component.css']
})
export class ReactiveFormArrayComponent implements OnInit {
  form:any;
  constructor() { }
  //UXTRENDZ Video
  ngOnInit(): void {
    this.form = new FormGroup({
      userDetail : new FormGroup({
        username:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
      }),
      course:new FormControl('Angular'),
      gender:new FormControl('Male'),
      // Form Array
      skills: new FormArray([
        new FormControl(null,Validators.required),
      ])
    })
  }
  add(){
    console.log(this.form.value);
  }
  
  Addskills(){
    const controls = new FormControl(null,Validators.required)
    this.form.get('skills').push(controls)
  }
}
