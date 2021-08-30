import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css']
})
export class CatchErrorComponent implements OnInit {
  error: any; 
  allProducts:any;
  fetching:boolean = false
  someError:boolean = false
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onGetProducts(){
    this.someError = false;
    this.fetching = true;
    this.getProducts().subscribe(res=>{
      console.log(res)
      this.allProducts = res
      this.fetching = false;

    },(err)=>{
      console.log(err)
      this.someError = true
      if(!err.error || !err.error.error ){
        // console.log('network error')
        this.error = "Unkown Error"
   
      }else{
        if(err.error.error = "permission denied")
        this.error = err.error.error

      }
      this.fetching = false
    })
  }
  getProducts(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
  }

}
