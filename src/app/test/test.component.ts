
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { InfoService } from '../shared/info.service';
import { Info } from '../shared/cvmaker.model';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
 
})
export class TestComponent implements OnInit {
 constructor(public styling:CommonService) { 
    
  }
  ngOnInit(): void {
  }
}
