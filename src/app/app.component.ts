import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicosComponent } from './components/musicos/musicos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MusicosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trombeta';
}
