import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>()
  username = new Subject<string>()
  asyncVideoEmit = new AsyncSubject()
  videoEmit = new ReplaySubject<string>(5,5000)
  constructor() { }

  print(count:any,containerId:any){
    let el = document.createElement('li');
    el.innerText = count;
    document.getElementById(containerId)!.appendChild(el);
  }
  print1(count:any,containerId:any){
    let el = document.createElement('div');
    el.setAttribute('class','item')
    el.innerHTML = count;
    document.getElementById(containerId)!.prepend(el);
  }

}
