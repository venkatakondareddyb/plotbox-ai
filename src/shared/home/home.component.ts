// Angular core and library imports
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

// Component imports
import { MainHeaderComponent } from '../../utils/components/main-header/main-header.component';
import { MainFooterComponent } from '../../utils/components/main-footer/main-footer.component';
import { PostcodeSearchComponent } from '../postcode-search/postcode-search.component';
import { PostcodeDetailsComponent } from '../postcode-details/postcode-details.component';
import { NoResultsFoundComponent } from '../no-results-found/no-results-found.component';

// Interfaces and services
import { PostcodeDetails, PostcodeResponse } from '../../utils/interfaces/postcode.interfaces';
import { PostcodeService } from '../../services/postcode.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MainHeaderComponent, MainFooterComponent, PostcodeSearchComponent, PostcodeDetailsComponent, NoResultsFoundComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedPostcode = signal<string>('');
  postcodeDetails = signal<PostcodeDetails | null>(null);
  errorMessage = signal<string>('');

  constructor(private postcodeService: PostcodeService) { }

  onPostcodeSelected(postcode: string): void {
    this.selectedPostcode.set(postcode);
    this.fetchPostcodeDetails();
  }

  fetchPostcodeDetails(): void {
    this.postcodeService.getPostcodeDetails(this.selectedPostcode()).subscribe({
      next: (response: PostcodeResponse<PostcodeDetails>) => {
        if (response.status === 200) {
          this.postcodeDetails.set(response.result);
          this.errorMessage.set('');
        } else {
          this.postcodeDetails.set(null);
          this.errorMessage.set('No Results Found');
        }
      },
      error: (err) => {
        this.errorMessage.set(err);
        this.postcodeDetails.set(null);
      },
    });
  }
}
