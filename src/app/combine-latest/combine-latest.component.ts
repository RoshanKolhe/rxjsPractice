import { Element } from '@angular/compiler';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, pluck, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements AfterViewInit {

  constructor() { }
 

  nameSource:any[] = ['ajay','aditya','rohan','atharva']
  colorSource:any[] = ['red','yellow','green','pink','blue']
 
  //template reference
  @ViewChild('name') name : ElementRef
  @ViewChild('color') color : ElementRef
  ngAfterViewInit(): void {
   const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(pluck('target','value'))
   const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(pluck('target','value'))

   //Ex - 01:Combine Latest
   combineLatest(nameObs,colorObs).subscribe(([name,color])=>{
     //console.log(name,color)
     this.createBox(name,color,'elContainer')
   })

   //Ex -02:with latestform

   nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name,color]) =>{
     console.log(name,color)
     this.createBox(name,color,'elContainer1')
   }) 


  }
  createBox(name:any,color:any,id:any){
    let el = document.createElement('div')
    el.innerText = name
    el.setAttribute('class',color)
    document.getElementById(id)?.appendChild(el)
 }


}
