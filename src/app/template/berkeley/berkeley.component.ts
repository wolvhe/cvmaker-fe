import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-berkeley',
  templateUrl: './berkeley.component.html',
  styleUrls: ['./berkeley.component.css']
})
export class BerkeleyComponent implements OnInit {

  constructor(public styling: CommonService) { }

  ngOnInit(): void {
  }

}
