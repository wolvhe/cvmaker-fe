import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-otago',
  templateUrl: './otago.component.html',
  styleUrls: ['./otago.component.css']
})
export class OtagoComponent implements OnInit {

  constructor(public styling: CommonService) { }

  ngOnInit(): void {
  }

}
