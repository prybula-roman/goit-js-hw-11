const axios = require("axios");
import Notiflix from "notiflix";
//import  templ  from "./templates/markup.hbs";
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const opt = {
  key: "24814547-7669f4452a14656066293be0d",
  q: "",
  per_page: 0,
  //  page: 0,
};

const searchParams = new URLSearchParams(opt);
console.log(searchParams.toString());

//const baseUrl = `https://pixabay.com/api/?${searchParams.toString()}`;
btn.addEventListener("click", () => {
  opt.per_page += 12;
  //opt.page++;
  opt.q = input.value;
  const searchParams = new URLSearchParams(opt);

  baseUrl = `https://pixabay.com/api/?${searchParams.toString()}`;
  console.log("********", input.value);
  console.log("baseUrl=", baseUrl);
  fetch(baseUrl)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch();
});
