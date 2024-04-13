import { Component, Input } from '@angular/core';
import { PostcodeDetails } from '../../utils/interfaces/postcode.interfaces';

@Component({
  selector: 'app-air-quality-index',
  standalone: true,
  imports: [],
  templateUrl: './air-quality-index.component.html',
  styleUrl: './air-quality-index.component.scss'
})
export class AirQualityIndexComponent {
  @Input() airQuality: PostcodeDetails['quality'] = 0;

  getColor(): string {
    if (this.airQuality >= 10) {
      return '#909';
    } else if (this.airQuality >= 7) {
      return 'red';
    } else if (this.airQuality >= 4) {
      return '#f90';
    } else {
      return '#090';
    }
  }
}
