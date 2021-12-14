const axios = require("axios");
import Notiflix from "notiflix";
import templ from "./templates/markup.hbs";

console.log(templ);

//console.log(Notiflix);
const key = "24814547-7669f4452a14656066293be0d";
const apiUrl = `https://pixabay.com/api/?key=${key}&q=yellow+flowers&image_type=photo&pretty=true`;
//&q=yellow+flowers&image_type=photo&pretty=true
const options = {};

const imgObj = {
  webformatURL: "", //webformatURL
  largImageURL: "", //ссылка на большое изображение
  tags: "", //строка с описанием изображения
  likes: "", // количество лайков.
  views: "", // количество просмотров.
};

fetch(apiUrl)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch();
