import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-component',
  templateUrl: './async-component.component.html',
  styleUrls: ['./async-component.component.css']
})
export class AsyncComponentComponent implements OnInit {


  constructor(private _dutility:DesignUtilityService) {
  
   }
  asyncVideoEmit:any;

  ngOnInit(): void {
    this._dutility.asyncVideoEmit.subscribe(res =>{
        this.asyncVideoEmit = res;
    })
  }
  videoAdd(inputVideo:any){
    console.log(inputVideo.value)
    this._dutility.asyncVideoEmit.next(inputVideo.value)
    
   

  }


  onComplete(){
    this._dutility.asyncVideoEmit.complete()
  }


}
