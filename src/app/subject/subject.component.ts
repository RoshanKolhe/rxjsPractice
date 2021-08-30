import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit,OnDestroy {
username:any = 'Anup';
  constructor(private _designUtility:DesignUtilityService) { 
    this._designUtility.username.subscribe(res =>{
      console.log(res)
     this.username = res
    })
  }
  ngOnDestroy(): void {
    this._designUtility.exclusive.next(false)
  }

  ngOnInit(): void {

    this._designUtility.exclusive.next(true)
  }

}
