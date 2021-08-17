import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-edinburgh',
  templateUrl: './edinburgh.component.html',
  styleUrls: ['./edinburgh.component.css']
})
export class EdinburghComponent implements OnInit {

  constructor(public styling: CommonService) { }

  ngOnInit(): void {
  }

}
