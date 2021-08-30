import { map, concatMap, mergeMap, delay } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-concatmap2',
  templateUrl: './concatmap2.component.html',
  styleUrls: ['./concatmap2.component.css']
})
export class Concatmap2Component implements OnInit {

  constructor(private _du:DesignUtilityService) { }
 notifyData = from([
   {
     name:'Facebook',
     icon:'https://image.flaticon.com/icons/png/512/124/124010.png',
     time:'4 Second ago.',
     img:'https://placeimg.com/50/50/tech/4',
     strong:'Mr Abc',
     p:'Comented on your post..'

   },
   {
    name:'Twitter',
    icon:'https://image.flaticon.com/icons/png/512/124/124010.png',
    time:'3 Second ago.',
    img:'https://placeimg.com/50/50/tech/4',
    strong:'Mr Abc',
    p:'Comented on your post..'

  },
  {
    name:'Github',
    icon:'https://image.flaticon.com/icons/png/512/124/124010.png',
    time:'2 Second ago.',
    img:'https://placeimg.com/50/50/tech/4',
    strong:'Mr Abc',
    p:'Comented on your post..'

  },
  {
    name:'Facebook',
    icon:'https://image.flaticon.com/icons/png/512/124/124010.png',
    time:'1 Second ago.',
    img:'https://placeimg.com/50/50/tech/4',
    strong:'Mr Abc',
    p:'Comented on your post..'

  },
 ])
 getHtml(data:any){
  return of(`<div class="header">
  <div class="app">
      <img src="${data.icon}" alt="na" width="20" height="20">
      ${data.name}
  </div>
  <div class="time"> ${data.time}</div>
</div>
<div class="body">
  <img class="item-img" src=" ${data.img}" alt="na" width="50" height="50">
  <strong> ${data.strong}</strong>
  <p> ${data.p}</p>
</div>
`).pipe(delay(3000))
 }
 
  ngOnInit(): void {
    
    this.notifyData.pipe(
     
      // mergeMap(res => this.getHtml(res))
      concatMap(res => this.getHtml(res))
    ).subscribe(res =>{
    console.log(res)
   this._du.print1(res,'notificationDiv')
    })
  
  }

}
