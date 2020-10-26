import { AppState } from '../../models/state.model';
import { AppActions } from '../../models/actions/app-actions.model';

const defaultState: AppState = {
};

export default function appReducer(state: AppState = defaultState, action: AppActions): AppState {
  switch (action.type) {
    default:
      return state;
  }
}