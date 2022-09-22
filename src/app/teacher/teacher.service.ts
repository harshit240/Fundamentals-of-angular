import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url="https://jsonplaceholder.typicode.com/"

  constructor(private http:HttpClient) { }
  
  getdata(){
    return this.http.get(this.url+'posts')
  }
  
}
