import { Action } from 'redux';

export type AppActions = ActionOne | ActionTwo;

export enum AppActionsTypes {
  actionOne = "ACTION_ONE",
  actionTwo = "ACTION_TWO"
};

export interface ActionOne extends Action {
};

export interface ActionTwo extends Action {
};
