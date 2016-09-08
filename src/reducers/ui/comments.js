// NOTE: this seems to be adding considerable complexity; is it worth doing this instead of just adding a "collapsed" field to the items in the data we already have?
import {
  RECEIVE_ITEM, UPDATE_COLLAPSED
} from '../../actions';

const defaultState = {
  defaultCollapsed: false,
  collapsed: {}
  // id: 0,
  // isLoading: false,
  // children: []
};

export default function commentsReducer(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_ITEM:
      return {
        ...state,
        collapsed: {
          ...state.collapsed,
          [action.id]: state.defaultCollapsed ? true : false
        }
      };
    case UPDATE_COLLAPSED:
      return {
        ...state,
        collapsed: {
          ...state.collapsed,
          ...action.items
        }
      };
    default:
      return state;
  }
}
