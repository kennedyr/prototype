import {Component} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {HomeComponent} from './home.ts';

@Component({selector: 'fountain-footer', template: ''})
class MockFooterComponent {}
@Component({selector: 'fountain-header', template: ''})
class MockHeaderComponent {}
@Component({selector: 'fountain-title', template: ''})
class MockTitleComponent {}

describe('Home Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockFooterComponent,
        MockHeaderComponent,
        MockTitleComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the header, title, and footer', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('app-header')).toBeDefined();
    expect(main.querySelector('app-title')).toBeDefined();
    expect(main.querySelector('app-footer')).toBeDefined();
  });
});
