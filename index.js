const axios = require("axios");
import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".gallery-list");
var lightbox = new SimpleLightbox(".gallery .list-item .refs");

let rezView = "";

let count_click = 0;

const opt = {
  key: "24814547-7669f4452a14656066293be0d",
  q: "",
  per_page: 40,
  page: 1,
};

btn.addEventListener("click", () => {
  if (opt.q.trim() != input.value.trim() && input.value != "") {
    rezView = "";
    opt.q = input.value;
    opt.page = 1;
    list.innerHTML = "";
  }

  if (opt.q.trim() === input.value.trim()) {
    opt.page++;
  }
  const searchParams = new URLSearchParams(opt);
  baseUrl = `https://pixabay.com/api/?${searchParams.toString()}`;

  console.log("********", input.value);
  console.log("baseUrl=", baseUrl);

  fetch(baseUrl)
    .then((resp) => resp.json())
    .then((data) => {
      const markup = data.hits;
      console.log("markup=", markup);

      rezView = markup
        .map(
          (elem) =>
            `<li class="list-item">
              <a rel=\"lightbox\" class="refs" href=\"${elem.largeImageURL}\">
                <img width=\"80\" height="50" border=\"0\" loading=\"lazy\" src=\"${elem.previewURL}\">
              </a>
            </li>`
        )
        .join("");

      //  console.log("rezView=", rezView);
      //list.innerHTML = rezView;
      list.insertAdjacentHTML("beforeend", rezView);
      new SimpleLightbox(".gallery .list-item .refs");

      list.addEventListener("click", (e) => {
        console.log("e.target=", e.target);
      });
    })
    .catch((error) => console.log(error));
});

console.log("window=", window);
window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;
  console.log("last_known_scroll_position=", last_known_scroll_position);
});
