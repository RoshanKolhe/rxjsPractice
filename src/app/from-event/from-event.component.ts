import { DesignUtilityService } from './../appServices/design-utility.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs'


@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  constructor(private _designutility:DesignUtilityService) { }

  @ViewChild('addBtn') addBtn:ElementRef;
  ngOnInit(): void {
   
  }
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click')
    .subscribe(res=>{ 
      let countVal = 'Video '+count++;
      this._designutility.print(countVal,'licontainer');
      this._designutility.print(countVal,'licontainer1');
    })
 
  }


}
