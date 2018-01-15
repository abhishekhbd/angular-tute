import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childMessage: string;

  @Output() 
  childToParentMessageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onKey(childToParentMessage){
    this.childToParentMessageEvent.emit(childToParentMessage)
  }

}
