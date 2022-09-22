import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.css']
})
export class DisplayTeamComponent implements OnInit {
  data:any;
  constructor(private teamservice:TeamService) { }

  ngOnInit(): void {
    this.teamservice.getdata().subscribe((res)=>{
      console.log(res);
      this.data =res
    })
    
  }

}
