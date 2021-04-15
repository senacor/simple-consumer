import {Component} from '@angular/core';
import {ItemsAdapter} from "../core/items.adapter";
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounce, filter, first} from "rxjs/operators";
import {interval, Subscription} from "rxjs";
import {Item} from "../core/model/item.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  readonly form: FormGroup;
  subscriptions: Subscription[] = [];
  searchResult: Item[] = []

  constructor(fb: FormBuilder, private items: ItemsAdapter) {
    this.form = fb.group({
      name: ''
    })
    this.subscriptions.push(
      this.form.controls.name.valueChanges
        .pipe(
          filter(_ => _.length > 2),
          debounce(() => interval(300)))
        .subscribe(this.search)
    )
  }

  onSearch = () => this.search(this.form.controls.name.value || null)

  private search = (value: string | null = null) =>
    this.items.get(value)
      .pipe(first(/* unsubscribe */))
      .subscribe(
        _ => this.searchResult = _,
        () => this.searchResult = []
      )
}
