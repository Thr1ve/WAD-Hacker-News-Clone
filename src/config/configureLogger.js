import createLogger from 'redux-logger';

const doNotLog = {
  'RECEIVE_ITEM': true
};

const logger = createLogger({
  collapsed: true,
  predicate: function(getState, action) {
    if (doNotLog[action.type]) {
      return false;
    }
    return true;
  }
});

export default logger;
