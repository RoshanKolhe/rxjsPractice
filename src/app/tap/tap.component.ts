import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  sub1: Subscription
  sub2: Subscription
  mycolor:string
  constructor(private _dataList:DesignUtilityService) { }

  ngOnInit(): void {
    const source = interval(1000)
    //Ex -01
    const arr = ['anup','shreyas','aditya','sharma','john','alex']
  
    this.sub1 = source.pipe(
      tap(res => {
          if(res == 4){
            this.sub1.unsubscribe()
          }
      }),
       map(res => arr[res])).subscribe((res:any)=>{
      this._dataList.print(res,'liList')
     
    })
        //Ex -02
        const colors = ['red','yellow','orange','blue','pink','green']
  
        this.sub2 = source.pipe(
          tap(res => {
            console.log('tap =>' +res)
            if(res == 5){
              this.sub2.unsubscribe()
            }
          }),
           map(res => colors[res])).subscribe((res:any)=>{
          this._dataList.print(res,'liList2')
          this.mycolor = res
        })
  }

}
