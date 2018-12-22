import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  // you can declare the type of var in class, or no need by someVar="10"
  // this kind of declaration only for the class 
  someVar:string = "He is cool";
  isDisabled:boolean = true;
  isDisplay= "";
  doSomething(){
    // if its value is true, then it turns false and vice versa
    this.isDisabled= !this.isDisabled;
    this.isDisplay="hide";
  }
  constructor() { }

  ngOnInit() {
  }

}
