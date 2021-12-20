const axios = require("axios");
import { galleryItems } from "./img/galery";
import Notiflix from "notiflix";
//import  templ  from "./templates/markup.hbs";
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
//import simpleLightbox from "simplelightbox";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const opt = {
  key: "24814547-7669f4452a14656066293be0d",
  q: "",
  // per_page: 0,
  //  page: 0,
};

btn.addEventListener("click", () => {
  // opt.per_page += 12;
  //opt.page++;
  opt.q = input.value;
  const searchParams = new URLSearchParams(opt);

  console.log("searchParams.toString=  ", searchParams.toString());

  baseUrl = `https://pixabay.com/api/?${searchParams.toString()}`;
  console.log("********", input.value);
  console.log("baseUrl=", baseUrl);

  fetch(baseUrl)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      //   SimpleLightbox.open({
      //     // items: ['demo/images/1big.jpg', 'demo/images/2big.jpg', 'demo/images/3big.jpg']
      // });
    })
    .catch(() => {
      console.log("the END of query");
    });
});
//==================================================

const list = document.querySelector(".gallery-list");

const markup = galleryItems
  .map((elem) => `<li class="list-item"><img src=\"${elem.preview}\"></li>`)
  .join("");

console.log("markup", markup);
list.innerHTML = markup;
