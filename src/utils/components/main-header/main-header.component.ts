import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  standalone: true,
  template: `
    <div class="header-content">
      <div class="logo">
        <img src="assets/logo_new.png" alt="Logo" width="96" height="22" />
      </div>
    </div>
  `,
  styles: [
    `
      .header-content {
        display: flex;
        justify-content: space-between;
        background-color: rgb(248 249 250);
        align-items: center;
        height: 100%;
        padding: 0 2.75rem;
      }
    `,
  ],
})
export class MainHeaderComponent { }
