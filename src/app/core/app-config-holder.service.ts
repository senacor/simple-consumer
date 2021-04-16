import {Inject, Injectable} from '@angular/core';
import {AppConfig} from './model/app-config.model';

export interface AppConfigHolderOutline {
  appConfig: () => AppConfig;
}
@Injectable({providedIn: 'root'})
export class AppConfigHolder implements AppConfigHolderOutline {
  constructor(@Inject('Window') private window: Window) {
  }

  appConfig = () => (this.window as any).config as AppConfig;
}
