import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="border border-gray-300 rounded-md grid grid-rows-[auto_1fr]">
      <div class="py-5 px-6 flex justify-between items-center">
        <div class="text-xl font-medium">{{header()}}</div>
        <ng-content select="[header]"></ng-content>
      </div>
      <div class="px-6 pb-6 pt-2">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {
  header = input<string>('')
}
