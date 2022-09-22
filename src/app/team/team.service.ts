import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  url="https://jsonplaceholder.typicode.com/"
  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get(this.url+'posts')
  }
}
