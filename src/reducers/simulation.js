import {
  TOGGLE_DRAG_MODE,
  SHARE_FINAL_RESULTS,
} from '../types';

const INITIAL_STATE = {
  dragMode: false,
  finalResults: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_DRAG_MODE:
      return {
        ...state,
        dragMode: payload,
      };
    case SHARE_FINAL_RESULTS:
      return {
        ...state,
        finalResults: payload,
      };
    default:
      return state;
  }
};
