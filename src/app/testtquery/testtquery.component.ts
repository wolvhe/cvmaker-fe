import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-testtquery',
  templateUrl: './testtquery.component.html',
  styleUrls: ['./testtquery.component.css'],
})
export class TesttqueryComponent implements OnInit {
  constructor(public styling: CommonService) {}
  ngOnInit(): void {}

  // log = 'red';
  // showLog = false;

  // onShowLog() {
  //   this.showLog = true;
  //   return (this.log);
  // }
  
//   bgColor : string = 'white';

//   changeColor(){
//     this.bgColor = 'grey';
// }



// onClick() {
//   this.styling.newStyle({ 'background-color': 'blue' });
// }
}
