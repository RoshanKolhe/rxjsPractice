import { pluck, take } from 'rxjs/operators';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';

@Component({
  selector: 'app-zipfork',
  templateUrl: './zipfork.component.html',
  styleUrls: ['./zipfork.component.css']
})
export class ZipforkComponent implements AfterViewInit {

  nameSource:any[] = ['ajay','aditya','rohan','atharva']
  colorSource:any[] = ['red','yellow','green','pink','blue']
  
  @ViewChild('name') name:ElementRef
  @ViewChild('color') color:ElementRef

  constructor() { }
  ngAfterViewInit(): void {

    const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(pluck('target','value'),take(3)) 
    const coloObs = fromEvent<any>(this.color.nativeElement,'change').pipe(pluck('target','value'),take(3))
    //Ex -01 : zip
    zip(nameObs,coloObs).subscribe(([name,color])=>{
      console.log(name,color)
      this.createBox(name,color,'elContainer')
    })
 //Ex -02 : zip
    forkJoin(nameObs,coloObs).subscribe(([name,color])=>{
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
