import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  souresub!:Subscription
  users=[
    {id:1,name:'Himanshu',age:22,email:'601himanshusahu@gmail.com',address:"gwalior" },
    {id:2,name:'aman',age:23,email:'601himanshusahu@gmail.com',address:"indore"},
    {id:3,name:'vijay',age:24,email:'601himanshusahu@gmail.com',address:"bhopal"},
    {id:4,name:'aakash',age:27,email:'601himanshusahu@gmail.com',address:"datia"},
  ]
  constructor() { }
  ngOnInit(): void {

      //Ex -01 String to Array
    const source = interval(1000);
    this.souresub = source.pipe(
      take(5),
      toArray())
    .subscribe((res)=>{
      // console.log(res);
    })

      //Ex-02 Array to observable stream
      const source2 = from(this.users)
      // .subscribe(res=>{
      //   console.log(res);
      // })
      // Observable stream to Array
      source2.pipe(toArray())
      .subscribe(res=>{
        // console.log(res);
      })

      //Ex -03 String to array using Of operator
      const source3 = of('Anup','Kajal','shekhar','Himanshu','Jagdeesh')
      source3.subscribe((res)=>{
        // console.log(res);

        source3.pipe(toArray()).subscribe(res=>{
          // console.log(res);
        })
      })

  }

}
