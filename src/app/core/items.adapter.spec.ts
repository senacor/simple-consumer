import {TestBed} from '@angular/core/testing';
import {ItemsAdapter} from './items.adapter';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AppConfig} from './model/app-config.model';
import {Item} from './model/item.model';

describe('ItemsAdapter', () => {
  let subject: ItemsAdapter;
  let httpMock: HttpTestingController;

  const windowMock = {
    config: {
      endpoints: {
        items: 'http://host:1234/items'
      }
    } as AppConfig
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: 'Window', useValue: windowMock}],
      imports: [HttpClientTestingModule]
    });
    subject = TestBed.inject(ItemsAdapter);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(subject).toBeTruthy();
  });

  it('#get() works w/ name param', () => {
    const res = [{name: 'test', available: 1, price: 1.99} as Item];
    subject.get('test').subscribe((n) => expect(n).toEqual(res));

    const req = httpMock.expectOne('http://host:1234/items?name=test');
    expect(req.request.method).toBe('GET');
    req.flush(res);
    httpMock.verify();
  });

  it('#get() works w/o name param', () => {
    const res = [{name: 'test', available: 1, price: 1.99} as Item];
    subject.get().subscribe((n) => expect(n).toEqual(res));

    const req = httpMock.expectOne('http://host:1234/items');
    expect(req.request.method).toBe('GET');
    req.flush(res);
    httpMock.verify();
  });
});
