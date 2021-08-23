import axios from "axios";

const Client = axios.create({
  baseURL: "http://www.omdbapi.com",
  timeout: 5000,
});

export var searchMovies = (search = "") => {
  return Client.get("/", {
    params: {
      apikey: "cf83624e",
      type: "movie",
      s: search,
    },
  })
    .then((res) => {
      if (res.data.Search) {
        return res.data.Search;
      } else {
        return [];
      }
    })
    .catch((e) => {
      console.log("get error", e);
    });
};

export var getMovie = (search = "") => {
  return Client.get("/", {
    params: {
      apikey: "cf83624e",
      type: "movie",
      plot: "full",
      i: search,
    },
  })
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return {};
      }
    })
    .catch((e) => {
      console.log("get error", e);
    });
};
