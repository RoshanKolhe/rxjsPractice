import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit,AfterViewInit {
  data:any = null;
  data1:any = null;
  @ViewChild('searchInput')  searchInput:ElementRef
  @ViewChild('searchInput1')  searchInput1:ElementRef
  constructor(private loadingbar:LoadingBarService) { }
 

  ngOnInit(): void {


}
ngAfterViewInit(): void {

  // ex -01
  const searchTerm = fromEvent<any>(this.searchInput.nativeElement,'keyup').pipe(
    map(event => event.target.value),
    debounceTime(1000)
    )
    
    searchTerm.subscribe(res=>{

      this.data = res
      this.loadingbar.start()

      setTimeout(()=>{
        this.data = null
        this.loadingbar.stop()
      },2000)
    // console.log(res)
  })

  //Ex -02 Distinct until changed
  const searchTerm1 = fromEvent<any>(this.searchInput1.nativeElement,'keyup').pipe(
    map(event => event.target.value),
    debounceTime(1000),
    distinctUntilChanged()
    )
    
    searchTerm1.subscribe(res=>{

      this.data1 = res
      this.loadingbar.start()

      setTimeout(()=>{
        this.data1 = null
        this.loadingbar.stop()
      },2000)
    // console.log(res)
  })
}

}
