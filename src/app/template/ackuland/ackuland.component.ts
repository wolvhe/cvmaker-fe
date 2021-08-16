import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-ackuland',
  templateUrl: './ackuland.component.html',
  styleUrls: ['./ackuland.component.css'],
})
export class AckulandComponent implements OnInit {
  constructor(public styling: CommonService) {}

  ngOnInit(): void {}

 

}
