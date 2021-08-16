import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private styling: CommonService) { }

  ngOnInit(): void {
  }

  // bgColor: string = 'white';

  // changeColor() {
  //   this.bgColor = 'grey';
  // }
  onClickColor1() {
    this.styling.newStyle({ 'background-color': 'blue' });
  }
  onClickColor2() {
    this.styling.newStyle({ 'background-color': 'red' });
  }
  onClickColor3() {
    this.styling.newStyle({ 'background-color': 'black' });
  }
  onClickColor4() {
    this.styling.newStyle({ 'background-color': 'green' });
  }
  onClickColor5() {
    this.styling.newStyle({ 'background-color': 'pink' });
  }
  onClickColor6() {
    this.styling.newStyle({ 'background-color': 'brown' });
  }
}
