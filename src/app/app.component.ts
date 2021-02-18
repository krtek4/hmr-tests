import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChangeValue, TestState } from './test.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(TestState) value$!: Observable<string>;

  constructor(private store: Store) {}

  public changeValue(): void {
    this.store.dispatch(new ChangeValue());
  }
}
