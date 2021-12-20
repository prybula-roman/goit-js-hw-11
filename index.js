const axios = require("axios");
import Notiflix from "notiflix";
// import  templ  from "./templates/markup.hbs";
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const opt = {
  key: "24814547-7669f4452a14656066293be0d",
  q: "",
}


btn.addEventListener("click",()=>{
const query = input.value;
render(query);
})

const render=(query)=>{ 
  opt.q=query;

  const searchParams = new URLSearchParams(opt);
  console.log("searchParams=",searchParams);
  baseUrl = `https://pixabay.com/api/?${searchParams.toString()}`;
  console.log("baseUrl=",baseUrl);
   fetch(baseUrl)
   .then((resp) => resp.json())
   .then((data) => {
     console.log(data.per_page);
   }).catch();

}









