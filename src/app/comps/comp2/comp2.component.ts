import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  username = "anup"
  constructor(private _designUtility:DesignUtilityService) {
    this._designUtility.username.subscribe(res =>{
      console.log(res)
     this.username = res
    })
   }

  ngOnInit(): void {
  }

  onChange(uName:any){
   this._designUtility.username.next(uName.value)
  //   this.username = uName.value
  }
}
