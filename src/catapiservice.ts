import { Injectable } from '@angular/core';
import {CatInfo} from './models';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  url = 'http://localhost:8000/cats';
  async getAllCats(): Promise<CatInfo[]> {
    const data = await fetch(`${this.url}/`);
    return(await data.json()) ?? [];
  }
  async updateCatStatus(cat: CatInfo, newStatus: boolean): Promise<CatInfo>{
    cat.out = newStatus;
    const data = await fetch(`${cat.url}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cat)
    });

    const catJson = await data.json();
    return catJson ?? {};
  }
}
