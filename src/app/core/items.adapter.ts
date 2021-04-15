import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "./model/item.model";
import {AppConfigHolder} from "./app-config-holder.service";

@Injectable({
  providedIn: 'root'
})
export class ItemsAdapter {

  constructor(private http: HttpClient, private config: AppConfigHolder) { }

  get = (name: string | null) =>
    this.http.get<Item[]>(`${this.config.appConfig().endpoints.items}${!!name? `?name=${name}` : ''}`)
}
