import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.scss'
})
export class MainFooterComponent {
  footerData = [
    {
      group: 'PlotBox',
      links: [
        { label: 'Blog', url: 'https://plotbox.com/en-gb/blog?hsLang=en-gb' },
        { label: 'News', url: 'https://plotbox.com/en-gb/news?hsLang=en-gb' },
        { label: 'Support', url: 'https://www.plotbox.io/en-gb/customer-support?hsLang=en-gb' },
        { label: 'Life At PlotBox', url: 'https://plotbox.com/en-gb/life-with-plotbox?hsLang=en-gb' },
      ],
    },
    {
      group: 'Facilities',
      links: [
        { label: 'Cemeteries', url: 'https://plotbox.com/en-gb/software-to-manage-cemeteries?hsLang=en-gb' },
        { label: 'Local Council Cemetery', url: 'https://plotbox.com/en-gb/local-council-cemetery-software?hsLang=en-gb' },
        { label: 'Crematorium', url: 'https://plotbox.com/en-gb/software-for-crematoriums?hsLang=en-gb' },
        { label: 'Natural Burial Ground', url: 'https://plotbox.com/en-gb/green-and-natural-burial-cemetery-software?hsLang=en-gb' },
      ],
    },
    {
      group: 'Software',
      links: [
        { label: 'Records', url: 'https://plotbox.com/en-gb/cemetery-records-management-platform?hsLang=en-gb' },
        { label: 'Contracts', url: 'https://plotbox.com/en-gb/streamlined-cemetery-contract-management?hsLang=en-gb' },
        { label: 'Mapping', url: 'https://plotbox.com/en-gb/mapping-services-and-software-for-cemeteries?hsLang=en-gb' },
        { label: 'CRM', url: 'https://plotbox.com/en-gb/software-for-cemetery-customer-relationship-management?hsLang=en-gb' },
      ],
    },
    {
      group: 'Compliance',
      links: [
        { label: 'Privacy Policy', url: 'https://www.plotbox.io/hubfs/PlotBox%20App%20Privacy%20Policy-1.pdf?hsLang=en-gb' },
        { label: 'Security', url: 'https://plotbox.com/en-gb/cloud-security?hsLang=en-gb' },
        { label: 'Terms of Use', url: 'https://www.plotbox.io/hubfs/Website_%20Terms%20of%20Use.pdf?hsLang=en-gb' },
        { label: 'Cloud Security', url: 'https://plotbox.com/en-gb/cloud-security?hsLang=en-gb' },
      ],
    },
  ];

}
