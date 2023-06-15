import { ImageModelType } from "../../types/image";

export enum ImageGallery {
  FETCH_IMAGES_GALLERY_START = "FETCH_IMAGES_GALLERY_START",
  FETCH_IMAGES_GALLERY_SUCCESS = "FETCH_IMAGES_GALLERY_SUCCESS",
  FETCH_IMAGES_GALLERY_ERRORED = "FETCH_IMAGES_GALLERY_ERRORED",
}

export interface ImageState {
  images: ImageModelType[];
  error: any;
}
