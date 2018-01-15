import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMessage = "Hi Message coming from message";

  parentMessageFromChild = "";
  
  constructor() { }

  steps: any= {
    step1:"",
    step2:"",
    step3:"",
  }
  
  onKey(parentMessage){
    this.parentMessage = parentMessage;
  }

  ngOnInit() {
  }

  receiveMessage($event) {
    try{
      this.steps = JSON.parse($event);
    }catch(e){
      
    }
  }
}
