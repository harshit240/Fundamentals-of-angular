import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any
  form:any;
  constructor(private b:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.b.snapshot.paramMap.get('id')
    console.log(this.id);

    


}
}
