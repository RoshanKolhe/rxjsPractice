import { Component, OnInit } from '@angular/core';
import { from,of } from 'rxjs';
import { interval, Subscription,  } from 'rxjs';
import { take, toArray  } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  users = [
    {name:'Annup',skill:'Angular'},
    {name:'Shikhar',skill:'Html,css'},
    {name:'Dhawan',skill:'Html,css'}
  ]

  constructor() { }
  sourceSub: Subscription;
  ngOnInit(): void {
    //ex- 01
    const source = interval(1000);
    this.sourceSub=source.pipe(
      take(5),
      toArray()
      )
    .subscribe(res => {
      console.log("example1:=>"+res)
      // if(res >= 8){
      //     this.sourceSub.unsubscribe();
      // }
    })


    //ex - 02
    const source2 = from(this.users)
    source2.pipe(toArray()).
    subscribe(res => {
      // console.log("example2:=>"+res)
      console.log(res)
    })

    //ex-03
    const source3 = of('Anup','Shikhar','Sharma')
    source3.pipe(toArray()).subscribe(res =>{
      console.log("example3:=>"+res)
    })
  }

}
