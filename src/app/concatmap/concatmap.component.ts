import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { from, of } from 'rxjs';
import { concatAll, concatMap, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.css']
})
export class ConcatmapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }
  getData(data:any){
    return of(data+' video Uploaded')
  }

  ngOnInit(): void {
    const source = from(['tech','comedy','news'])
    
    //Ex -01 Map

    source.pipe(
      map(res => this.getData(res))
      ).subscribe(res => res.subscribe(res2=>{
       this._du.print(res2,'liContainer')
        
      }))

      //Ex - 02 mergeMap()

      source.pipe(
        mergeMap(res => this.getData(res)),
      
        ).subscribe(res => {
         this._du.print(res,'liContainer1')
          
        })
      //Ex - 03 concatMap()

      source.pipe(
        concatMap(res => this.getData(res)),
        
        ).subscribe(res => {
         this._du.print(res,'liContainer2')
          
        })  
      
  
  }

}
