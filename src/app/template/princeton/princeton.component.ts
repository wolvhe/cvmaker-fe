import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-princeton',
  templateUrl: './princeton.component.html',
  styleUrls: ['./princeton.component.css']
})
export class PrincetonComponent implements OnInit {

  constructor(public styling: CommonService) { }

  ngOnInit(): void {
  }

}
