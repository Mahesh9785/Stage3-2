import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h3>Child Component</h3>
  <p>TICKS: {{ lifecycleTicks }}</p>
  <p>DATA: {{ data }}</p>
  `
})
export class ChildComponent implements OnChanges {
  @Input() data: string=''; //The input decorator takes its value from the parent component and initializes the data
  lifecycleTicks: number = 0;

  ngOnChanges() {
    this.lifecycleTicks++; //whenever the value of data changes the ngOnChanges is fired and it increments the value of lifecycle ticks
  }

  ngOnInit(){
    alert('Data : '+ this.data+' Ticks : '+this.lifecycleTicks); // the ngOnInit fires only once and for the final time for initializing the data and the lifecycleticks.
  }
}

@Component({
  selector: 'app-parent',
  template: `
  <h1>ngOnChanges Example</h1>
  <app-child [data]="arbitraryData"></app-child>
  `
})
export class ParentComponent {
  arbitraryData: string = 'initial';

  //the constructor changes the value of the data to final so that the ngOnhanges can be fired after 5 seconds
  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }
}
