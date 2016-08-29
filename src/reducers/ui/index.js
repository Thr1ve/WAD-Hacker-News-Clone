import { combineReducers } from 'redux';

import feed from './feed';
import comments from './comments';

export default combineReducers({ feed, comments });
