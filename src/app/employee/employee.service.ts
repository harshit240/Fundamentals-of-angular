import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'https://young-spire-25464.herokuapp.com/api/pn/'
  constructor(private http: HttpClient) { }
  
  bloginsert(blogall:any){
    console.log(blogall);
    return this.http.post(this.url+'bloginsert',blogall) /* Network code*/
  }
}
