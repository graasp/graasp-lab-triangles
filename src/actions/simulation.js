import {
  TOGGLE_DRAG_MODE,
  SHARE_FINAL_RESULTS,
} from '../types';

export const shareFinalResults = finalResults => (dispatch) => {
  dispatch({
    type: SHARE_FINAL_RESULTS,
    payload: finalResults,
  });
};

export const toggleDragMode = dragMode => (dispatch) => {
  dispatch({
    type: TOGGLE_DRAG_MODE,
    payload: dragMode,
  });
};

export default {
  shareFinalResults,
  toggleDragMode,
};
