import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchImagesGallery } from "../redux/imageGallery/actions";
import { ImageModelType } from "../types/image";

export function useImageGalleryData() {
  const { data, loading, loaded, errored, error } = useSelector(
    (state: any) => state.gallery
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesGallery());
  }, []);

  return {
    list: data ?? [],
    gallery: data?.find((item: ImageModelType) => item.id),
    loading,
    loaded,
    errored,
    error,
  };
}
