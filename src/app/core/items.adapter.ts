import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './model/item.model';
import {AppConfigHolder} from './app-config-holder.service';
import {Observable} from 'rxjs';

export type ItemsAccess = {
  get: (name: string | null) => Observable<Item[]>;
};

@Injectable({
  providedIn: 'root'
})
export class ItemsAdapter implements ItemsAccess {

  constructor(private http: HttpClient, private config: AppConfigHolder) { }

  get = (name: string | null = null) =>
    this.http.get<Item[]>(`${this.config.appConfig().endpoints.items}${!!name ? `?name=${name}` : ''}`)
}
