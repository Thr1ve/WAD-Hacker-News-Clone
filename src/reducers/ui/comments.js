// NOTE: this seems to be adding considerable complexity; is it worth doing this instead of just adding a "collapsed" field to the items in the data we already have?
import { Map } from 'immutable';
import {
  RECEIVE_ITEM, UPDATE_COLLAPSED,
  SET_LOADING_THREAD
} from '../../actions';

export const defaultState = Map({
  defaultCollapsed: false,
  collapsed: Map({}),
  loading: true
});

export default function commentsReducer(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_ITEM:
      return state.setIn(['collapsed', action.id], state.get('defaultCollapsed') ? true : false)
    case UPDATE_COLLAPSED:
      return state.mergeIn(['collapsed'], Map(action.items))
    case SET_LOADING_THREAD:
      return state.set('loading', action.bool);
    default:
      return state;
  }
}
