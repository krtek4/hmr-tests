import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

export class ChangeValue {
   static readonly type = '[Test] ChangeValue';
}

@State<string>({
  name: 'test',
  defaults: 'initial'
})
@Injectable()
export class TestState {
  @Action(ChangeValue)
  changeValue(ctx: StateContext<string>) {
    ctx.setState('changed');
  }
}
