import { concatMap, exhaustMap, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements AfterViewInit {
  
  @ViewChild('saveData') saveData:ElementRef 
  num:number =0;
  saveRequest:any = 0;
  fetching:boolean = false
  url = "https://global-1bb0f.firebaseio.com/exhaustMap.json"
  constructor( private http:HttpClient,private _du:DesignUtilityService) { }
  ngAfterViewInit(): void {
    fromEvent(this.saveData.nativeElement, 'click').pipe(
      tap(()=>this.fetching = true),
      exhaustMap(() => this.onSave(this.num++)),
      //concatMap(()=> this.onSave(this.num++))
    ).subscribe(res =>{
        console.log(res)
        this.onFetch()
        this.fetching = false
    })
  }
  onSave(changes:any){
    return this.http.put(this.url,{data:changes})
  }
 
  onFetch(){
    this.http.get<any>(this.url).subscribe(res =>{
      console.log(res.data)
      this.saveRequest = res.data
    })
  }
  ngOnInit(): void {
  }

}
