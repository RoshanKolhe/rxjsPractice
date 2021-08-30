import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  data:any[];
  data1:any[];
  data2:any[];

  dataArr = [
    {id:1,name:'anup',gender:'Male'},
    {id:2,name:'priyanka',gender:'Female'},
    {id:3,name:'ashish',gender:'Male'},
    {id:4,name:'vivek',gender:'Male'},
    {id:5,name:'mounika',gender:'Female'},
    {id:6,name:'neha',gender:'Female'}
  ]
  constructor() { }

  ngOnInit(): void {

    const source = from(this.dataArr)

    //Ex -01
    source.pipe(filter(member=>member.name.length > 6),toArray()).subscribe(res=>{
      this.data = res
    })
    //ex-02
    source.pipe(filter(member=>member.gender ==  'Female'),toArray()).subscribe(res=>{
      this.data1 = res
    })
    //ex-03
    source.pipe(filter(member=>member.id<=4),toArray()).subscribe(res=>{
      this.data2 = res
    })
  }

}
