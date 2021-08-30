import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit,OnDestroy {
  textstatus:string;
  textstatus1:string;
  subs2:Subscription;
  names:string;
  namestatus:string;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {

    //Ex -01 Manual
    const customObs1 = Observable.create((observer:any) =>{
      
      setTimeout(() =>{
        observer.next('Angular');
      },1000)
      setTimeout(() =>{
        observer.next('Typescript');
      },2000)
      setTimeout(() =>{
        observer.next('Javascript');
       
        
      },3000)
      setTimeout(() =>{
        observer.next('Jquery');
       observer.error(new Error('Limit Exceed'));
      
      },4000)
      setTimeout(() =>{
        observer.next('Html');
        observer.complete()
       
    },5000)
  
    })

    customObs1.subscribe((res:any) =>{
      //console.log(res)
      this._designUtility.print(res,'ulList')
    },(error:any)=>{
      this.textstatus = 'error'
    },(completed:any)=>{
      this.textstatus = 'completed'
    })

    //Ex -02(custom Interval)
    const custonObs2 = Observable.create((observer:any)=>{
      const arr2 = ['Angular','javascript','html','css','jquery','bootstrap']
      let count = 0;
      setInterval(()=>{
        observer.next(arr2[count])
        if(count>=3){
          observer.error(new Error('Error'))
        }
        if(count>=5){
          observer.complete()
        }
        count++;
      },1000)
    })

    this.subs2=custonObs2.subscribe((res:any)=>{
      //console.log(res)
      this._designUtility.print(res,'ulList2')
    },(error:any)=>{
      this.textstatus1='error';
    },(complete:any)=>{
      this.textstatus1='completed';

    })

    //Ex - 03(Custom Names)

    const obs3 = Observable.create((observer:any)=>{
      const arr3 = ['Anup','shekhar','John','Alex']
      let count = 0;
      setInterval(()=>{
        observer.next(arr3[count])
      
        if(count>=3){
          //observer.error(new Error('Error'))
        }
        if(count>=5){
          observer.complete()
        }
        count++;
      },1000)
    })

    obs3.subscribe((res:any)=>{
      console.log(res)
      this.names = res
    },(error:any)=>{
        this.namestatus = 'error' 
    },(complete:any)=>{
        this.namestatus = 'completed'
    })
  }
  ngOnDestroy(){
    this.subs2.unsubscribe();
  }

}
