import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
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
