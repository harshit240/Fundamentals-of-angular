import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // url = 'https://young-spire-25464.herokuapp.com/api/pn/'
  url='https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) { }
  
  bloginsert(blogall:any){
    console.log(blogall);
    return this.http.post(this.url+'bloginsert',blogall) /* Network code*/
  }
  
  showdata(){
    return this.http.get(this.url+'posts')
  }
  viewdata(id:any){
    return this.http.get(this.url+'blogview/'+id)
  }
}
