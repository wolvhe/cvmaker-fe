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
  onClickAckuColor1() {
    this.styling.newStyle({ 'background-color': 'lightslategray' });
  }
  onClickAckuColor2() {
    this.styling.newStyle({ 'background-color': 'pink' });
  }
  onClickAckuColor3() {
    this.styling.newStyle({ 'background-color': 'rgb(250, 250, 119)' });
  }
  onClickAckuColor4() {
    this.styling.newStyle({ 'background-color': 'rgb(119, 219, 250)' });
  }
  onClickAckuColor5() {
    this.styling.newStyle({ 'background-color': 'rgb(248, 149, 142)' });
  }
  onClickAckuColor6() {
    this.styling.newStyle({ 'background-color': 'rgb(19, 161, 0)' });
  }
  // edin
  onClickEdinColor1() {
    this.styling.newEdinStyle({ 'background-color': 'lightslategray' });
    this.styling.newEdinTextStyle({ 'color': 'lightslategray' });
  }
  onClickEdinColor2() {
    this.styling.newEdinStyle({ 'background-color': 'hotpink' });
    this.styling.newEdinTextStyle({ 'color': 'hotpink' });
  }
  onClickEdinColor3() {
    this.styling.newEdinStyle({ 'background-color': 'darkorange' });
    this.styling.newEdinTextStyle({ 'color': 'darkorange' });
  }
  onClickEdinColor4() {
    this.styling.newEdinStyle({ 'background-color': 'darkslateblue' });
    this.styling.newEdinTextStyle({ 'color': 'darkslateblue' });
  }
  onClickEdinColor5() {
    this.styling.newEdinStyle({ 'background-color': 'brown' });
    this.styling.newEdinTextStyle({ 'color': 'brown' });
  }
  onClickEdinColor6() {
    this.styling.newEdinStyle({ 'background-color': 'rgb(19, 161, 0)' });
    this.styling.newEdinTextStyle({ 'color': 'darkgreen' });
  }

  //princeton
  onClickPrinColor1() {
    this.styling.newPrinTextStyle({ 'color': 'black', 'font-weight': 'bold' });
  }
  onClickPrinColor2() {
    this.styling.newPrinTextStyle({ 'color': 'rgb(202, 52, 52)', 'font-weight': 'bold' });
  }
  onClickPrinColor3() {
    this.styling.newPrinTextStyle({ 'color': 'rgb(45, 58, 133)', 'font-weight': 'bold' });
  }
  onClickPrinColor4() {
    this.styling.newPrinTextStyle({ 'color': 'rgb(99, 57, 57)', 'font-weight': 'bold' });
  }
  onClickPrinColor5() {
    this.styling.newPrinTextStyle({ 'color': 'rgb(68, 155, 140)', 'font-weight': 'bold' });
  }
  onClickPrinColor6() {
    this.styling.newPrinTextStyle({ 'color': 'darkorange', 'font-weight': 'bold' });
  }
  
}
