import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsAdapter} from './items.adapter';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {provide: 'Window', useValue: window},
    ItemsAdapter
  ]
})
export class CoreModule { }
