import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="https://jsonplaceholder.typicode.com/posts" // Api
  url2="https://newsapi.org/v2/everything?q=tesla&from=2022-08-13&sortBy=publishedAt&apiKey=77a4982e26aa460a9c43d771a5fdd2cb"
  constructor(private http: HttpClient) { }
  
  alldata(){
    return this.http.get(this.url)
  }
  newsdata(){
    return this.http.get(this.url2)
  }
  
}