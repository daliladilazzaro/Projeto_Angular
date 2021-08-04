import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  //  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // lila = { name: 'Lila', isProgrammer: true, linguage: 'java' }

  students: Student[] = [
    { name: 'Lila', isProgrammer: true, linguage: 'java' },
    { name: 'Jorge', isProgrammer: false },
    { name: 'Marques', isProgrammer: false }
  ]


  // title = 'jads works!';
}
