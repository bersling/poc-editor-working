import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blub',
  templateUrl: './blub.component.html',
  styleUrls: ['./blub.component.scss']
})
export class BlubComponent implements OnInit {

  @Input() title: string;

  constructor() {}

  ngOnInit() {
  }

}
