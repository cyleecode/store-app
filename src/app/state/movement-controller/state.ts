import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Movement } from './action';
import { MovementStateModel } from './model';

@State<MovementStateModel>({
  name: 'movement'
})
@Injectable()
export class MovementState {
  @Action(Movement.Up)
  movementUp(ctx: StateContext<MovementStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      move: 'Up'
    });
  }
  @Action(Movement.Down)
  movementDown(ctx: StateContext<MovementStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      move: 'Down'
    });
  }
  @Action(Movement.Left)
  movementLeft(ctx: StateContext<MovementStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      move: 'Left'
    });
  }
  @Action(Movement.Right)
  movementRight(ctx: StateContext<MovementStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      move: 'Right'
    });
  }
}
