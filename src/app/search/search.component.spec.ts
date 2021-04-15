import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchComponent} from './search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemsAccess, ItemsAdapter} from '../core/items.adapter';
import {of} from 'rxjs';
import {Item} from '../core/model/item.model';

describe('SearchComponent', () => {
  let subject: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let adapterSpy: jasmine.Spy;

  const items = (name: string| null) => [{name: name || 'null', available: 1, price: 1.99} as Item];
  const itemsAdapterMock: ItemsAccess = {
    get: (name: string | null) => of(items(name))
  };

  beforeEach(async () => {
    adapterSpy = spyOn(itemsAdapterMock, 'get').and.callThrough();
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [{provide: ItemsAdapter, useValue: itemsAdapterMock}],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    subject = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(subject).toBeTruthy();
    expect(subject.form.controls.name.value).toEqual('');
  });

  it('#onSearch() triggers adapter method', () => {
    subject.form.controls.name.setValue('test');

    subject.onSearch();

    expect(adapterSpy).toHaveBeenCalledOnceWith('test');
    expect(subject.searchResult).toEqual(items('test'));
  });
});
