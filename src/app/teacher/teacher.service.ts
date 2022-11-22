import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  // url = 'https://jsonplaceholder.typicode.com/';
  url='http://localhost:3000/api/'
  constructor(private http: HttpClient) {}
  
  getdata() {
    return this.http.get(this.url + 'blogs');
  }
  teacher_view(id: any) {
    return this.http.get(this.url + 'posts/' + id);
  }
  updateblog(data: any, id: any) {
    return this.http.put(this.url + 'posts/' + id, data);
  }
  
}
