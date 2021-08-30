import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { concat, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    
    const sourceTech = interval(1000).pipe(
      map(video => 'Tech video #'+ (video + 1)),
      take(5)
      )
    const sourceComedy = interval(1000).pipe(
        map(video => 'Comedy video #'+ (video + 1)),
        take(3)
        )
    const sourceNews = interval(1000).pipe(
          map(video => 'News video #'+ (video + 1)),
          take(4)
          )
    const FinalObs = concat(sourceTech,sourceComedy,sourceNews)
    FinalObs.subscribe(res => {
            this._du.print(res,'liContainer')
        })
  }

}
