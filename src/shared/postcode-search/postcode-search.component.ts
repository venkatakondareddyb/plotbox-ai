import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map, startWith, switchMap } from 'rxjs';
import { PostcodeService } from '../../services/postcode.service';
import { PostcodeResponse } from '../../utils/interfaces/postcode.interfaces';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-postcode-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './postcode-search.component.html',
  styleUrl: './postcode-search.component.scss'
})
export class PostcodeSearchComponent implements OnInit {
  @Output() postcodeSelected = new EventEmitter<string>();

  searchControl = new FormControl('');
  filteredOptions = signal<string[]>([]);

  constructor(private postcodeService: PostcodeService) { }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        startWith(''),
        switchMap((postCode) => {
          if (postCode) {
            return this.postcodeService.getFilteredPostcodes(postCode).pipe(
              map((response: PostcodeResponse<string[]>) => {
                if (response.status === 200) {
                  return response.result;
                }
                return [];
              })
            );
          }
          return [];
        })
      )
      .subscribe((options) => {
        this.filteredOptions.set(options);
      });
  }

  onEnter(): void {
    const selectedPostcode = this.searchControl.value;
    if (selectedPostcode) {
      this.postcodeSelected.emit(selectedPostcode);
    }
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.postcodeSelected.emit(event.option.value);
  }
}
