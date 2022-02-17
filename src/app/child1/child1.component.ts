import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }
  // @Output() marks a property in a child component as a doorway through which data can travel from the child to the parent.
  // Use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.
  @Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

}
