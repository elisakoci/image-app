import axios from "axios";
import { QueryParamsType } from "../types/QueryParams";

export const getImagesGallery = (queryParams: QueryParamsType) =>
  axios.get(
    `https://api.imgur.com/3/gallery/hot/viral/day/${queryParams?.page}?showViral=true&mature=true&album_previews=true`,
    {
      headers: {
        Authorization: "73487cd8053d345",
      },
    }
  );
