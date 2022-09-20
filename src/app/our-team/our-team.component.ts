import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/team.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  students:any;
  data:any;
  constructor(private os:TeamService) { }

  ngOnInit(): void {
    this.data=this.os.students
    console.log(this.data);
  }

}
