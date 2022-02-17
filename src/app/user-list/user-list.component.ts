import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  //inline style
  styles: [
    `.custom{
      color:red;
    }`
  ]
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
