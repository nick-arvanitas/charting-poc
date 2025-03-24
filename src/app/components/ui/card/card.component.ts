import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  standalone: true,
  template: `
    <div class="border border-gray-300 rounded-md grid grid-rows-[auto_1fr]">
      <div class="py-5 px-6">
        <div class="text-2xl">{{header()}}</div>
      </div>
      <div class="px-6 pb-6">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {
  header = input<string>('')
}
