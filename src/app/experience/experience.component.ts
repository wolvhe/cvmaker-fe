import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html', 
  styleUrls: ['./experience.component.css'],
})

export class ExperienceComponent implements OnInit {
 

  constructor() { }

  ngOnInit(){
    // $.fn.animatePrependTo = function(sel: any, speed: any) {
    //   var $this = this,
    //     newEle = $this.clone(true).prependTo(sel),
    //     newPos = newEle.position();
    //   newEle.hide();
    //   $this.css('position', 'absolute').animate(newPos, speed, function() {
    //     newEle.show();
    //     $this.remove();
    //   });
    //   return newEle;
    // };
    
    // $('#swap1').on("click", function() {
    //   var tmp = $('#inner1').parent();
    //   $('#inner1').animatePrependTo($("#inner2").parent(), 1000);
    //   $('#inner2').animatePrependTo(tmp, 1000);
    // });
    
    // $('.swap2').on("click", function() {
    //   var tmp = $('#inner4').parent();
    //   $('#inner3').animatePrependTo($("#inner3").parent(), 1000);
    //   $('#inner4').animatePrependTo(tmp, 1000);
    // });
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
