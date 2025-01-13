import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DbzModule } from './dbz/dbz.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DbzModule], // Import DbzModule instead of MainPageComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angularthingies';
}
