import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  sub1:Subscription;
  sub2:Subscription;
  sub3:Subscription;
  msg1:any;
  msg2:any;

  constructor(private _designutility:DesignUtilityService) { }

  ngOnInit(): void {

    const broadCastVideo = interval(1000)

    //Ex - 01
    this.sub1 = broadCastVideo.pipe(
      map(res=> 'video '+res ))
      .subscribe((res)=>{
        this.msg1 = res
      // console.log(res);
    })

    setTimeout(()=>{
      this.sub1.unsubscribe();
    },10000)
     //Ex - 02

     this.sub2 = broadCastVideo.pipe(
       map(data => data + 10)
     ).subscribe(res=>{
       this.msg2 = res;
      // console.log(res)
     })
     setTimeout(()=>{
      this.sub2.unsubscribe();
    },10000)

     //Ex - 02

     const members =from([
       {id : 1, name:'anup'},
       {id : 2, name:'pankaj'},
       {id : 3, name:'tanmay'},
       {id : 4, name:'ashish'},
       {id : 5, name:'rajesh'},
       {id : 6, name:'vivek'},
       {id : 7, name:'janeet'},
       {id : 8, name:'devang'},
    ])

    this.sub3 = members.pipe(
      map(data => data.name)
    ).subscribe(res => {
      this._designutility.print(res,'ulList')
      console.log(res);
    })
  }

}
