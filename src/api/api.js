import axios from "axios";

export const makeModelsPost = async (postData) => {
  const res = await axios.post("http://127.0.0.1:5001/bnb/api/v1/models/", postData);
  const data = await res.data;

  return data;
};

//demo url: https://api.npoint.io/6bf081bc157c1d05e44a
export const getStats = async () => {
  const res = await axios("http://127.0.0.1:5001/bnb/api/v1/stats/");
  const data = await res.data;

  return data;
};


// test connection
export const getTestStats = async () => {
  const res = await axios("http://127.0.0.1:5001/bnb/api/v1/stats/");
  const data = await res.data;

  return data;
};