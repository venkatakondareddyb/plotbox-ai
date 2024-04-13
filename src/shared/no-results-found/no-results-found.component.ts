import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-no-results-found',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './no-results-found.component.html',
  styleUrl: './no-results-found.component.scss'
})
export class NoResultsFoundComponent {
  @Input() title!: string;
}
