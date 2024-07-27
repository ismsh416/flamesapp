import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlamesComponent } from './flames/flames.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlamesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flamesapp';
}
