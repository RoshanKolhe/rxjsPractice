import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor(private _designutility:DesignUtilityService) { }
  obsMsg:any;
  videoSubscripe:Subscription;

  ngOnInit(): void {

    //const broadCastVideo = interval(1000);
    const broadCastVideo = timer(5000,1000)

    this.videoSubscripe=broadCastVideo.subscribe(res =>{
      this.obsMsg ='item'+ res;
      this._designutility.print(this.obsMsg,'licontainer')
      if(res>=5){
        this.videoSubscripe.unsubscribe();
      }
    })
  }
  

}
