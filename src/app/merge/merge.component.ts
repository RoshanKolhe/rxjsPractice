import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    
    const sourceTech = interval(3000).pipe(
      map(video => 'Tech video #'+ (video + 1)),
      take(5)
      )
    const sourceComedy = interval(4000).pipe(
        map(video => 'Comedy video #'+ (video + 1)),
        take(3)
        )
    const sourceNews = interval(3500).pipe(
          map(video => 'News video #'+ (video + 1)),
          take(4)
          )
    const FinalObs = merge(sourceTech,sourceComedy,sourceNews)
    FinalObs.subscribe(res => {
            this._du.print(res,'liContainer')
        })
  }

}
