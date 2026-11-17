import { Component } from '@angular/core';
import { ExercicisComponent } from './my-component/my-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExercicisComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
