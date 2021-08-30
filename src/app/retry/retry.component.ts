import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, retry, retryWhen, scan } from 'rxjs/operators';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  fetching:boolean = false;
  arr: any;
  status:string = 'No Data'
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

  fetchDetails(){
    this.fetching = true
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .pipe(
      //retry(4)
      retryWhen(error=>error.pipe(
        delay(1000),
        scan((retryCount)=>{
            if(retryCount>=5){
              throw error;
            }else{
              retryCount = retryCount + 1;
              console.log('retryCount => '+retryCount)
              this.status = 'Retrying Attempt #'+retryCount
              return retryCount
            }
        },0)
        ))
      )
    .subscribe(res=>{
      this.arr = res;
      this.fetching = false
      this.status = "Data Fetched "
    },(error)=>{
      this.fetching = false
      this.status = "Problrm Fetching Data "
    })
  }
}
