import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { CommonService } from '../services/common.service';
// import {jsPDF} from 'jspdf'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  constructor(public styling: CommonService) {}

  // @ViewChild('content',{static:false}) el!:ElementRef;

  ngOnInit(): void {  }
  // downloadMyFile(){
  //   const link = document.createElement('a');
  //   link.setAttribute('target', '_blank');
  //   link.setAttribute('href', 'abc.net/files/test.ino');
  //   link.setAttribute('download', `products.csv`);
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // }

  //akuland

  // makePDF(){
  //   let pdf = new jsPDF('p','pt','a4');
  //   pdf.html(this.el.nativeElement,{
  //     callback:(pdf)=>{
  //       pdf.save("file.pdf");
  //     }
  //   })
  //   pdf.save();
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
    this.styling.newEdinTextStyle({ color: 'lightslategray' });
  }
  onClickEdinColor2() {
    this.styling.newEdinStyle({ 'background-color': 'hotpink' });
    this.styling.newEdinTextStyle({ color: 'hotpink' });
  }
  onClickEdinColor3() {
    this.styling.newEdinStyle({ 'background-color': 'darkorange' });
    this.styling.newEdinTextStyle({ color: 'darkorange' });
  }
  onClickEdinColor4() {
    this.styling.newEdinStyle({ 'background-color': 'darkslateblue' });
    this.styling.newEdinTextStyle({ color: 'darkslateblue' });
  }
  onClickEdinColor5() {
    this.styling.newEdinStyle({ 'background-color': 'brown' });
    this.styling.newEdinTextStyle({ color: 'brown' });
  }
  onClickEdinColor6() {
    this.styling.newEdinStyle({ 'background-color': 'rgb(19, 161, 0)' });
    this.styling.newEdinTextStyle({ color: 'darkgreen' });
  }

  //princeton
  onClickPrinColor1() {
    this.styling.newPrinTextStyle({ color: 'black', 'font-weight': 'bold' });
  }
  onClickPrinColor2() {
    this.styling.newPrinTextStyle({
      color: 'rgb(202, 52, 52)',
      'font-weight': 'bold',
    });
  }
  onClickPrinColor3() {
    this.styling.newPrinTextStyle({
      color: 'rgb(45, 58, 133)',
      'font-weight': 'bold',
    });
  }
  onClickPrinColor4() {
    this.styling.newPrinTextStyle({
      color: 'rgb(99, 57, 57)',
      'font-weight': 'bold',
    });
  }
  onClickPrinColor5() {
    this.styling.newPrinTextStyle({
      color: 'rgb(68, 155, 140)',
      'font-weight': 'bold',
    });
  }
  onClickPrinColor6() {
    this.styling.newPrinTextStyle({
      color: 'darkorange',
      'font-weight': 'bold',
    });
  }

//otago
onClickOtagoColor1() {
  this.styling.newOtagoStyle({ 'background-color': 'black' });
}
onClickOtagoColor2() {
  this.styling.newOtagoStyle({ 'background-color': 'rgb(202, 52, 52)' });
}
onClickOtagoColor3() {
  this.styling.newOtagoStyle({ 'background-color': 'rgb(45, 58, 133)' });
}
onClickOtagoColor4() {
  this.styling.newOtagoStyle({ 'background-color': 'rgb(99, 57, 57)' });
}
onClickOtagoColor5() {
  this.styling.newOtagoStyle({ 'background-color': 'rgb(68, 155, 140)' });
}
onClickOtagoColor6() {
  this.styling.newOtagoStyle({ 'background-color': 'darkorange' });
}

//berk
onClickBerkColor1() {
  this.styling.newBerkStyle({ color: 'black', 'font-weight': 'bold' });
}
onClickBerkColor2() {
  this.styling.newBerkStyle({
    color: 'darkgreen',
    'font-weight': 'bold',
  });
}
onClickBerkColor3() {
  this.styling.newBerkStyle({
    color: 'rgb(45, 58, 133)',
    'font-weight': 'bold',
  });
}
onClickBerkColor4() {
  this.styling.newBerkStyle({
    color: 'rgb(99, 57, 57)',
    'font-weight': 'bold',
  });
}
onClickBerkColor5() {
  this.styling.newBerkStyle({
    color: 'hotpink',
    'font-weight': 'bold',
  });
}
onClickBerkColor6() {
  this.styling.newBerkStyle({
    color: 'red',
    'font-weight': 'bold',
  });
}

//toggle border
  toggleAcku: boolean = true;
  changeAcku() {
    this.toggleAcku = !this.toggleAcku;
  }
  toggleEdin: boolean = true;
  changeEdin() {
    this.toggleEdin = !this.toggleEdin;
  }
  togglePrin: boolean = true;
  changePrin() {
    this.togglePrin = !this.togglePrin;
  }
  toggleOtago: boolean = true;
  changeOtago() {
    this.toggleOtago = !this.toggleOtago;
  }
  toggleBerk: boolean = true;
  changeBerk() {
    this.toggleBerk = !this.toggleBerk;
  }
  
//toggle show button
  isShown: boolean = false;
  onselect() {
    this.isShown = !this.isShown;
  }
  isShownEdin: boolean = false;
  onselectEdin() {
    this.isShownEdin = !this.isShownEdin;
  }
  isShownPrin: boolean = false;
  onselectPrin() {
    this.isShownPrin = !this.isShownPrin;
  }
  isShownOtago: boolean = false;
  onselectOtago() {
    this.isShownOtago = !this.isShownOtago;
  }
  isShownBerk: boolean = false;
  onselectBerk() {
    this.isShownBerk = !this.isShownBerk;
  }

}
