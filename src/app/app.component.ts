import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectAngularDev';

  isAuth = false;
  developpeurs = [
    {
      name: 'Menadoo',
      status: 'present'
    },
    {
      name: 'Salah',
      status: 'absent'
    },
    {
      name: 'ali',
      status: 'absent'
    }
  ];
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    alert('On allume tout !');
  }
}
