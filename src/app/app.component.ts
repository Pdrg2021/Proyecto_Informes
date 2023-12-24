import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: 'login', icon: 'finger-print'},
    { title: 'Actividades', url: 'actividades', icon: 'reorder-four'},
    { title: 'Informes', url: 'informes', icon: 'document-text' },
    { title: 'Estadísticas', url: 'estadisticas', icon: 'stats-chart' },

  ];
//  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
