import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <p class="custom">
      country-list works!
    </p>
  `,
  styles: [
    `.custom{
      color:blue;
    }`
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
