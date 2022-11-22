import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableServiceService {

  constructor() { }
  print(val: string,containerId:any){
    let el = document.createElement('li')
    el.innerHTML = val

    document.getElementById(containerId)?.appendChild(el)
  }

}
