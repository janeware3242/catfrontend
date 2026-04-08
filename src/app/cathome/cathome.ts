import {Component, inject, ChangeDetectorRef} from '@angular/core';
import {CatDetail} from '../cat-detail/cat-detail';
import {CatInfo} from '../../models';
import {CatApiService} from '../../catapiservice';

@Component({
  selector: 'app-home',
  imports: [CatDetail],
  template: `
    <section>
    <section class="results">
      @for (catInfo of catList; track $index) {
        <app-cat-detail [cat]="catInfo" />
      }
    </section>
  `,
//  styleUrls: ['./home.css'],
})
export class CatHome {
  catService: CatApiService = inject(CatApiService);
  catList: CatInfo[] = []
  constructor(private ref: ChangeDetectorRef) {
    this.catService.getAllCats().then((catList: CatInfo[]) => {
      this.catList = catList;
      this.ref.markForCheck();
    });
  }
}
