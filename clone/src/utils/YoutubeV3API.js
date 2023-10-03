const axios = require("axios");
const base_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "99",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY3,

    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchFromAPI = async (url) => {
  const { data } = await axios.get(`${base_URL}/${url}`, options);

  return data;
};
