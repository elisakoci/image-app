import { Reducer } from "react";
import { Action } from "redux";
import { ImageGallery, ImageState } from "./types";

const initialState: ImageState = {
  images: [],
  error: null,
};

const reducer: Reducer<ImageState, Action> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case ImageGallery.FETCH_IMAGES_GALLERY_START:
      state = { ...state };
      break;
    case ImageGallery.FETCH_IMAGES_GALLERY_SUCCESS:
      state = { ...state, images: action.payload };
      break;
    case ImageGallery.FETCH_IMAGES_GALLERY_ERRORED:
      state = {
        ...state,
        error: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
export { reducer };
