import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap, delay, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(private _dl:DesignUtilityService) { }
  
  getData(data:any){
    return of(data+' video Uploaded').pipe(delay(1000))
  }
  ngOnInit(): void {
    const source = from( ['tech','comedy','news'])
     //Ex -01 Map
     source.pipe(
      map(res => this.getData(res))
    ).subscribe(res=> res.subscribe(res2 => {
    // console.log(res2)
      this._dl.print(res2,'liContainer')
    }))
    //Ex -02 Map + MergeAll
        source.pipe(
          map(res => this.getData(res)),
          switchAll()
        ).subscribe(res=>{
          this._dl.print(res,'liContainer1')
        })
        //Ex -03 MergeMap
        source.pipe(
          switchMap(res => this.getData(res)),
      
        ).subscribe(res=>{
          this._dl.print(res,'liContainer2')
        })
  }

}
