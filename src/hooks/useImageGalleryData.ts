import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchImagesGallery } from "../redux/imageGallery/actions";
import { DataType } from "../types/image";

export function useImageGalleryData() {
  const { data, loading, loaded, errored, error } = useSelector(
    (state: any) => state.gallery
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesGallery({page: 1}));
  }, []);

  return {
    list: data ?? [],
    gallery: data?.find((item: DataType) => item.id),
    loading,
    loaded,
    errored,
    error,
  };
}
