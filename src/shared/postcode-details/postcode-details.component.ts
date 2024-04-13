// Angular core imports
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Component and interface imports
import { PostcodeDetails } from '../../utils/interfaces/postcode.interfaces';
import { AirQualityIndexComponent } from '../air-quality-index/air-quality-index.component';

@Component({
  selector: 'app-postcode-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatIconModule, MatProgressSpinnerModule, AirQualityIndexComponent],
  templateUrl: './postcode-details.component.html',
  styleUrls: ['./postcode-details.component.scss']
})
export class PostcodeDetailsComponent {
  @Input({ required: true }) postcodeDetails!: PostcodeDetails | null;
}
