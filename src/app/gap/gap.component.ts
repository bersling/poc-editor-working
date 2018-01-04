import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gap',
  templateUrl: './gap.component.html',
  styleUrls: ['./gap.component.scss']
})
export class GapComponent implements OnInit {

  @Input() text: string;
  @Output() onChange = new EventEmitter();

  constructor() {
    console.log('text', this.text);
  }

  ngOnInit() {
  }

}
