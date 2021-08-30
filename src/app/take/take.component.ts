import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, takeLast, takeUntil, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private _designUtility:DesignUtilityService) { }
  arr = ['anup','shreyas','aditya','sharma','john','alex']

  ngOnInit(): void {
    const nameSource = from(this.arr)
   

    // Ex -01
    nameSource.pipe(take(1)).subscribe(res => {
   
      this._designUtility.print(res,'liList1')
    })

    // Ex -02 | TakeLast
  
    nameSource.pipe(takeLast(4)).subscribe(res => {
      console.log(res)
      this._designUtility.print(res,'liList2')
   })
   // Ex -03 | TakeUntil
  
  const source = interval(1000)
  let condition1 = timer(6000)
  source.pipe(
    map(res => "Number " + res),
    takeUntil(condition1)
  ).subscribe(res => {
    console.log(res)
    this._designUtility.print(res,'liList3')
  }) 




  }

}
