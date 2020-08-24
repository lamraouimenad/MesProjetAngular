export class DeveloppeurService {
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

  // tslint:disable-next-line:typedef
  switchOnAll() {
    for (const developpeur of this.developpeurs) {
      developpeur.status = 'present';
    }
  }

  // tslint:disable-next-line:typedef
  switchOffAll() {
    for (const developpeur of this.developpeurs) {
      developpeur.status = 'absent';
    }
  }
}
