import { Component, OnInit } from '@angular/core';
import { forkJoin, from, merge, zip } from 'rxjs';
import { toArray } from 'rxjs/operators';
declare let Chart:any
@Component({
  selector: 'app-externam-lib',
  templateUrl: './externam-lib.component.html',
  styleUrls: ['./externam-lib.component.css']
})
export class ExternamLibComponent implements OnInit {
   source2:any[]= [];
  constructor() { }

  ngOnInit(): void {

    const source = from([0, 10, 5, 12, 20, 30, 45])
    const source1 = from([12, 19, 3, 5, 2, 3])
    

 
    //First Graph
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 12, 20, 30, 45],
      }]
    };
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
    var myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
    //second Graph
    const labels1 = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data1 = {
      labels: labels1,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [12, 19, 3, 5, 2, 3],
      }]
    };
    const config1 = {
      type: 'line',
      data: data1,
      options: {}
    };
    var myChart = new Chart(
      document.getElementById('myChart1'),
      config1
    );
    merge(source,source1).subscribe(res=>{
     this.source2.push(res)
    
      // const source = from(res).pipe().subscribe(res =>{
    })
    console.log(this.source2 )
    const data2 = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: this.source2,
      }]
    };
    const config2 = {
      type: 'line',
      data: data2,
      options: {}
    };
    var myChart = new Chart(
      document.getElementById('myChart2'),
      config2
    );

      forkJoin(source,source1).subscribe(res=>{
        const data2 = {
          labels: labels,
          datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: res,
          }]
        };
        const config3 = {
          type: 'line',
          data: data2,
          options: {}
        };
        var myChart = new Chart(
          document.getElementById('myChart3'),
          config3
        );
      })

  }

}
