import { combineReducers } from 'redux';
import { reducer } from '../imageGallery/reducer';

const rootReducer = combineReducers({
  gallery: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;