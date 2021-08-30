import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
