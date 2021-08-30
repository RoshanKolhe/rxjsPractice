import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private _designComponent:DesignUtilityService) { }
  obsmsg:any;
  ngOnInit(): void {

    //of example
    const obs1 = of('Anup','Shekhar','Sharma');
    obs1.subscribe(res => {
      //console.log(res)
      let data = "Name:"+res;
      this._designComponent.print(data,'licomponentof');
    })
    const obs2 = of({a:'Anup',b:'shekhar'});
    obs2.subscribe(res => {
     // console.log(res)
      this.obsmsg = res;
     // this._designComponent.print(data,'licomponentof1');
    })

    //From example
    const obs3 = from(['Anup1','Shekhar1','Sharma1']);
    obs3.subscribe(res => {
      console.log(res)
       let data = "Name:"+res;
       this._designComponent.print(data,'licomponentof2');
    })

    //from promise
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Promise Resolved')
      },3000)
    })
    // promise.then(res=>{
    // //   console.log(res)
    // // })
    const obs4 = from(promise);
    obs4.subscribe(res => {
      console.log(res)
       let data = res;
       this._designComponent.print(data,'licomponentof3');
    })

    //string to observable
    const obs5 = from('Welcome');
    obs5.subscribe(res => {
      console.log(res)
       let data = res;
       this._designComponent.print(data,'licomponentof4');
    })
      
  }

}
