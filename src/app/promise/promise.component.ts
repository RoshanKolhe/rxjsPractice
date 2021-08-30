import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  promiseVal: any;
  constructor() { }
  dell = {
    brand:'Dell',
    hardDisk: '2 TB',
    color: 'Silver'
  }
  hp = {
    brand:'HP',
    hardDisk: '2 TB',
    color: 'Silver'
  }
  notAvailable = {
    brand:'Not Available',
    status:'Failed'
  }
  dellAvailable(){
    return true
  }
  hpAvailable(){
    return false
  }
  ngOnInit(): void {
    let buyLaptop = new Promise((resolve,reject) =>{
        //resolve("Laptop bought");
        if (this.dellAvailable()){
          return setTimeout(()=>{
            resolve(JSON.stringify(this.dell))
          },3000)
        }
        else if(this.hpAvailable()){
          return setTimeout(()=>{
            resolve(JSON.stringify(this.hp))
          },3000)
        }
        else{
          return reject(this.notAvailable)
        }
    });

    buyLaptop.then(res => {
      this.promiseVal = res;
      console.log(res)
    }).catch(res => {
      this.promiseVal = res;
      console.log(res)
    })
  }

  
  

}
