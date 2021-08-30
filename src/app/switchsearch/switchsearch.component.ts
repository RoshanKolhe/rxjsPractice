import { Search } from './../appInterface/search.interface';
import { SearchService } from './../appServices/search.service';
import { map, pluck, debounceTime, distinctUntilChanged, concatMap, switchMap, filter } from 'rxjs/operators';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-switchsearch',
  templateUrl: './switchsearch.component.html',
  styleUrls: ['./switchsearch.component.css']
})
export class SwitchsearchComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm : NgForm
  searchresults:any
  searchResultcount:any
  constructor(private _searchService:SearchService) { }

  ngAfterViewInit(): void {
    
  

    const formValue = this.searchForm.valueChanges

    formValue!.pipe(
     // map(data=> data.searchitem)
     filter(() => this.searchForm.valid!),
     pluck('searchitem'),
     debounceTime(500),
     distinctUntilChanged(),
     switchMap(res => this._searchService.getSearches(res))
      ).subscribe(res =>{
      console.log(res)
      this.searchresults = res;
     this.searchResultcount = Object.keys(res).length;
    })


  }

 

}
