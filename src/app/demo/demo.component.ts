import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'Piojo Demo';
  items = ["Uno", "Dos", "Tres"];

  objeto= {};
  power = 10;

  addItem(): any{
    this.items.push('Nuevo Item');
  }

  deleteItem(index: number): any{
    this.items.splice(index, 1);    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
