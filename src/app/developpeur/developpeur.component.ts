import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-developpeur',
  templateUrl: './developpeur.component.html',
  styleUrls: ['./developpeur.component.scss']
})
export class DeveloppeurComponent implements OnInit {

  @Input() devName: string;
  @Input() devStatus: string;

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  getStatus() {
    return this.devStatus;
  }
  // tslint:disable-next-line:typedef
  getColor() {
    if (this.devStatus === 'present') {
      return 'green';
    } else if (this.devStatus === 'absent') {
      return 'red';
    }
  }
}
