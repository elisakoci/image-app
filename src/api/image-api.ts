import axios from "axios";

export const getImagesGallery = () =>
  axios.get(
    `https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=true&album_previews=true`,
    {
      headers: {
        Authorization: "73487cd8053d345",
      },
    }
  );
