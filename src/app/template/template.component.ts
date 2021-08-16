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
    this.styling.newStyle({ 'background-color': 'lightslategray' });
  }
  onClickColor2() {
    this.styling.newStyle({ 'background-color': 'pink' });
  }
  onClickColor3() {
    this.styling.newStyle({ 'background-color': 'rgb(250, 250, 119)' });
  }
  onClickColor4() {
    this.styling.newStyle({ 'background-color': 'rgb(119, 219, 250)' });
  }
  onClickColor5() {
    this.styling.newStyle({ 'background-color': 'rgb(248, 149, 142)' });
  }
  onClickColor6() {
    this.styling.newStyle({ 'background-color': 'rgb(19, 161, 0)' });
  }
}
