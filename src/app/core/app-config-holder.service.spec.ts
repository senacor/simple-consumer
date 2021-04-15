import {inject, TestBed} from '@angular/core/testing';
import {AppConfigHolder} from './app-config-holder.service';
import {AppConfig} from './model/app-config.model';

describe('AppConfigHolder', () => {
  const windowMock: any = {
    config: {
      endpoints: {
        items: 'http://localhost:1234/items'
      }
    } as AppConfig
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppConfigHolder, {provide: 'Window', useValue: windowMock}]
    });
  });

  it('is injectable', inject([AppConfigHolder], (configHolder: AppConfigHolder) => {
    expect(configHolder).toBeDefined();
  }));

  describe('AppConfig::Endpoint', () => {
    it('#url() works', inject([AppConfigHolder], (configHolder: AppConfigHolder) => {
      expect(configHolder.appConfig().endpoints.items).toBe('http://localhost:1234/items');
    }));
  });
});
