import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-reply',
  templateUrl: './share-reply.component.html',
  styleUrls: ['./share-reply.component.css']
})
export class ShareReplyComponent implements OnInit {


  url = "https://jsonplaceholder.typicode.com/posts"
  constructor() { }

  ngOnInit(): void {
  }

}
