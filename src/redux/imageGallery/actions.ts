import { Dispatch } from "redux";
import { getImagesGallery } from "../../api/image-api";
import { ImageGallery } from "./types";
import { QueryParamsType } from "../../types/QueryParams";

export const fetchImagesGallery: any =
  (queryParams: QueryParamsType) => (dispatch: Dispatch) => {
    dispatch({
      type: ImageGallery.FETCH_IMAGES_GALLERY_START,
    });
    getImagesGallery(queryParams)
      .then((res: any) => {
        dispatch({
          type: ImageGallery.FETCH_IMAGES_GALLERY_SUCCESS,
          payload: res.data,
        });
      })
      .catch((e) => {
        dispatch({
          type: ImageGallery.FETCH_IMAGES_GALLERY_ERRORED,
          payload: e,
        });
      });
  };
