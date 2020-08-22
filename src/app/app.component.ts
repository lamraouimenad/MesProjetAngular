import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectAngularDev';
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 200
    );
  });
  isAuth = false;
  developpeurs = [
    {
      name: 'Menad',
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
