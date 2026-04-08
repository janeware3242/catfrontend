import { Component, inject, input, model } from '@angular/core';
import { CatInfo } from '../../models';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CatApiService } from '../../catapiservice';

@Component({
  selector: 'app-cat-detail',
  imports: [],
  template: `
  <section class="listing" (click)="updateStatus(!cat().out)">
    <h2 class="listing-heading">{{ cat().name }}</h2>
    <p class="listing-location">{{ cat().out ? "out of room" : "in room" }}</p>
  </section>`,
//  styleUrl: './cat-detail.css',
})
export class CatDetail {
  cat = model.required<CatInfo>();
  catService: CatApiService = inject(CatApiService);

  updateStatus(newStatus: boolean) {
    this.catService.updateCatStatus(this.cat(), newStatus)
    .then((catInfo: CatInfo) => {
      this.cat.set(catInfo);
    });
  }
}
