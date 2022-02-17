import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data = 10;
  displayVal = '';
  name = 'peter';
  disable = false;
  count = 0;
  show = false;
  color = "red";
  rang = "xyz";
  users = ['abc', 'bcd', 'cde', 'def', 'efg'];
  bgColor = "green";
  userData: any = {};
  userDetails = [
    { name: 'Saurav', email: 'saurav@test.com', phone: '123', socialAccount: ['facebook', 'instagram', 'gmail'] },
    { name: 'abc', email: 'abc@test.com', phone: '123', socialAccount: ['facebook', 'instagram', 'youtube'] },
    { name: 'xyz', email: 'xyz@test.com', phone: '123', socialAccount: ['facebook', 'instagram', 'linkedin'] },
    { name: 'def', email: 'def@test.com', phone: '123', socialAccount: ['facebook', 'instagram', 'yahoo'] },
  ];
  display = false;
  todoList: any[] = [];
  userDetails1 = [
    { name: 'Saurav Borah', email: 'saurav@test.com' },
    { name: 'user 2', email: 'user2@test.com' },
    { name: 'user 3', email: 'user3@test.com' },
    { name: 'user 4', email: 'user4@test.com' },
  ];
  data1 = "x";
  name1: any;
  today = Date();
  user1 = {
    name: 'saurav',
    age: '28'
  }
  getValue() {
    return "This is get value function"
  }
  //any here is the type ...here it accept any type but we can set it to specific type like int , boolean , float , etc
  getName(name: any, surname: string) {
    alert(name);
    alert(surname);
  }
  getEmoji() {
    alert('😂😂');
  }
  getData(val: string) {
    console.warn(val)
  }
  getUsername(val: string) {
    console.warn(val)
    this.displayVal = val
  }
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
  updateColor() {
    this.color = "blue";
    this.bgColor = "yellow";
  }
  getInfo(data: NgForm) {
    console.warn(data);
    this.userData = data;
  }
  toggle() {
    this.display = !this.display;
  }
  addTask(item: string) {
    this.todoList.push({ id: this.todoList.length, name: item });
    console.warn(this.todoList)
  }
  removeTask(id: number) {
    console.warn(id)
    this.todoList = this.todoList.filter(item => item.id !== id)
  }
  updateChild() {
    this.data = Math.floor(Math.random() * 10)
  }
  //will be passing this function to child1 component
  updateData(item: string) {
    console.warn(item);
    this.data1 = item;
  }
  getVal(item: HTMLInputElement) {
    console.warn(item)
  }
  capString(item: string) {
    return item.toUpperCase();
  }
  userLogin(item: any) {
    console.warn(item)
  }
}
