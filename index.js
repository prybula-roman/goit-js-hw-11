const axios = require("axios");
import { galleryItems } from "./img/galery";
import Notiflix from "notiflix";
// import  templ  from "./templates/markup.hbs";
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
//import simpleLightbox from "simplelightbox";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".gallery-list");
var lightbox = new SimpleLightbox('.gallery .list-item .refs');

let rezView="";


let count_click=0;

const opt = {
  key: "24814547-7669f4452a14656066293be0d",
  q: "",

   per_page: 10,
    page: 1,
};

btn.addEventListener("click", () => {
 
  if(opt.q.trim()!=input.value.trim()){

        rezView="";
        opt.q = input.value;
        opt.page=1;    
       }

if(opt.q.trim()===input.value.trim()){
    opt.page++;

       }
       
       const searchParams = new URLSearchParams(opt);
  //console.log("searchParams.toString=  ", searchParams.toString());
  baseUrl = `https://pixabay.com/api/?${searchParams.toString()}`;
  console.log("********", input.value);
  console.log("baseUrl=", baseUrl);

  fetch(baseUrl)
    .then((resp) => resp.json())
    .then((data) => {
      const markup = data.hits;
      console.log("markup=",markup);

      rezView+= markup.map((elem) => `<li class="list-item"><a rel=\"lightbox\" class="refs" href=\"${elem.largeImageURL}\"><img src=\"${elem.previewURL}\"></li>`)
      .join("");
      console.log("rezView=",rezView);
      list.innerHTML = rezView;

      //var lightbox = new SimpleLightbox('.gallery .list-item .refs');
      var lightbox = new SimpleLightbox('.gallery  .refs');
console.dir(btn)


//======================================


// let gallery = new SimpleLightbox('.gallery-list a');
// gallery.on('show.simplelightbox', function () {
// 	console.log("e.target=" ,e.target)
// });

//======================================
      list.addEventListener("click",(e)=>{
        

        console.log("e.target=" ,e.target)
      })
      //   SimpleLightbox.open({
      //     // items: ['demo/images/1big.jpg', 'demo/images/2big.jpg', 'demo/images/3big.jpg']
      // });
    })
    .catch(() => {
      console.log("the END of query");
    });
});
//==================================================

// const list = document.querySelector(".gallery-list");

// const markup = galleryItems
//   .map((elem) => `<li class="list-item"><img src=\"${elem.preview}\"></li>`)
//   .join("");

// console.log("markup", markup);
// list.innerHTML = markup;
//===================================================


