import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-developpeur',
  templateUrl: './developpeur.component.html',
  styleUrls: ['./developpeur.component.scss']
})
export class DeveloppeurComponent implements OnInit {

  @Input() devName: string;
  @Input() devStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.devStatus;
  }
  getColor() {
    if(this.devStatus === 'present') {
      return 'green';
    } else if(this.devStatus === 'absent') {
      return 'red';
    }
  }
}
