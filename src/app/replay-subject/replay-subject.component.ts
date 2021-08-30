import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
  subscibMode1:boolean=false
  subscibMode2:boolean=false
  subscription1:Subscription
  subscription2:Subscription
  intSubscription:Subscription
  methodInterval:boolean= false
  constructor(private _dutility:DesignUtilityService) {
    this._dutility.videoEmit.subscribe(res =>{
      this.userList.push(res)
    })
   }
  //List Data
  userList = [
    'Angular 1',
    'Angular 2'
  ]
  userList1 :any=[]
  userList2 :any=[]

  ngOnInit(): void {
  }
  videoAdd(inputVideo:any){
    this._dutility.videoEmit.next(inputVideo.value)
    // this.userList.push(inputVideo.value)
    // console.log(this.userList)

  }
  user2Subscribe(){
    if(this.subscibMode1){
      this.subscription1.unsubscribe()
    }else{
      this.subscription1 = this._dutility.videoEmit.subscribe((res) =>{
        this.userList1.push(res)
       })
    }
 
    this.subscibMode1 = !this.subscibMode1
  }
  user3Subscribe(){
    if(this.subscibMode2){
      this.subscription2.unsubscribe()
    }else{
      this.subscription2 = this._dutility.videoEmit.subscribe((res) =>{
        this.userList2.push(res)
       })
    }
    this.subscibMode2 = !this.subscibMode2
  }
  toggleMethod(){
    if(!this.methodInterval){
      const broadCastVideo = interval(1000)
      this.intSubscription = broadCastVideo.subscribe(res =>{
        this._dutility.videoEmit.next('video'+res)
      })
    }else{
      this.intSubscription.unsubscribe()
    }
   
    this.methodInterval = !this.methodInterval
  }

}
