import { Component, OnInit } from '@angular/core';
import { ItmService } from 'src/itm.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  students:any;
  data:any;
  constructor(private d: ItmService) { }
  ngOnInit(): void {
    this.data=this.d.students
  }

}
