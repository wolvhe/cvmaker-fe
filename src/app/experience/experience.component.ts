import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html', 
  styleUrls: ['./experience.component.css'],
})

export class ExperienceComponent implements OnInit {
 
  constructor() { }

  ngOnInit(){
    
  }
  editorModules = {toolbar: [
    [
      'bold', 'italic', 'underline'
    ],
    [
      {
        'list': 'ordered'
      },
      {
        'list': 'bullet'
      }
    ]
  ]}
}
