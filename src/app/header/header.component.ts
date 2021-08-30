import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exclusive : boolean = false
  constructor(private designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtility.exclusive.subscribe(res =>{
      this.exclusive = res
    })
  }

}
