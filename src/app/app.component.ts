import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import {
  AgChartOptions,
  LicenseManager
} from "ag-charts-enterprise";

LicenseManager.setLicenseKey("[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-076336}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{31 March 2025}____[v3]_[0102]_MTc0MzM3NTYwMDAwMA==c6567fdb808acaba121aed5798506e61");

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
  <nav>
  <ul>
    <li class="flex gap-x-2 h-10 bg-gray-100 items-center">
      @for (link of navlinks; track $index) {
        @if (link.path !== '') {
          <a class="text-sm px-2 h-full hover:bg-gray-200 flex items-center active:bg-gray-200" [routerLink]="link.path" routerLinkActive="bg-gray-200 font-semibold">{{ link.path }}</a>
        }
      }
    </li>
  </ul>
</nav>

<router-outlet />
  `
})
export class AppComponent {
  title = 'charting-test';

  navlinks = routes;
}
