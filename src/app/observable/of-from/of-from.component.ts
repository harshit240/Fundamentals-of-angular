import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { ObservableServiceService } from '../service/observable-service.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  obsmsg!: any;
  constructor(private ser:ObservableServiceService) { }

  ngOnInit(): void {

    //Example:- OF operator {{

    const obs1 = of('Aman','Himanshu','Anup')

    obs1.subscribe((res)=>{
      // console.log(res);
      let count = "Hello "
      this.ser.print(count +res,'elcontainer')
    })
    //Object to observable stream
    const obs2 = of({a:'Gagan',b:'Raj',c:'Shyam'})

    obs2.subscribe((res)=>{
      this.obsmsg = res;
      // console.log(res);
    })

    // }}

    //Example:- From operator {{
    //Array to observable stream
      const obs3 = from(['Jon','Aman','Sharma'])
      obs3.subscribe((res)=>{
        // console.log(res);
        this.ser.print(res,'elcontainer2')
      })

    //Example:- From operator {{
      //from - promise
    //Promise to observable stream

    let promise = new Promise(resolve =>{
      setTimeout(()=>{
        resolve('Promise Resolved')
      },3000);
    })
      // const obs4 = from(promise)
      // obs4.subscribe((res)=>{
      //   console.log("from promise => " + res);
      //   this.ser.print(res, 'elcontainer4')
      // })

      //From string to observable
      const obs5 = from("Welcome to dabra")
      obs5.subscribe((res)=>{
        console.log("from string => " + res);
        this.ser.print(res ,'elcontainer5')
      })
  }

}
