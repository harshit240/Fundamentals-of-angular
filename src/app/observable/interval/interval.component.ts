import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { ObservableServiceService } from '../service/observable-service.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsmsg!:any;
  videoSubscription!:Subscription;
  constructor(private obsser:ObservableServiceService) { }

  ngOnInit(): void {

    // const broadcastVideos = interval(1000)
    // timer(delay,interval)
    const broadcastVideos = timer(5000,1000)


    this.videoSubscription = broadcastVideos.subscribe(res =>{
      console.log(res);
      this.obsmsg = 'video ' + res
      this.obsser.print(this.obsmsg,'elcontainer')
      if (res>=5) {
        this.videoSubscription.unsubscribe()
      }
    })

  }

}
