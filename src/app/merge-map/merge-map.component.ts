import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { from, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, mergeAll,mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(private _dl:DesignUtilityService) { }

  getData(data:any){
    return of(data+' video Uploaded')
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
          mergeAll()
        ).subscribe(res=>{
          this._dl.print(res,'liContainer1')
        })
        //Ex -03 MergeMap
        source.pipe(
          mergeMap(res => this.getData(res)),
      
        ).subscribe(res=>{
          this._dl.print(res,'liContainer2')
        })
  }

}


