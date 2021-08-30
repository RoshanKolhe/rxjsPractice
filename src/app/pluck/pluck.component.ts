import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
  data: any;
  data1: any;
  constructor() { }
  users = [
    {name:'anup',skills:'Angular',job:{
      title:'frontend developer',
      exp:'10 years'
    }
  },
    {name:'arjun',skills:'Html,Css',job:{
      title:'frontend developer',
      exp:'10 years'
    }},
    {name:'bheem',skills:'JS',job:{
      title:'frontend developer',
      exp:'10 years'
    }}
  ]
  ngOnInit(): void {
    //Ex - 01
    from(this.users).pipe(
      pluck('name'),
      toArray()
    ).subscribe((res)=>{
      console.log(res);
      this.data=res
    })

    //Ex - 02
    from(this.users).pipe(
      pluck('job','title'),
      toArray()
    ).subscribe((res)=>{
      console.log(res);
      this.data1=res
    })
  }

}
