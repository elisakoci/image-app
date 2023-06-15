import axios from "axios";

export const getImagesGallery = () =>
  axios.get(`https://api.imgur.com/3/gallery/`, {
    headers: {
      Authorization: "",
    },
  });
