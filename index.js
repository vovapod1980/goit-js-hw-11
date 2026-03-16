import{a as c,S as m,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="55036225-8ce8ea9a0711c46d4e7453374";c.defaults.baseURL="https://pixabay.com/api/";async function y(s){return(await c.get("/",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b><span>${t}</span></p>
        <p class="info-item"><b>Views</b><span>${a}</span></p>
        <p class="info-item"><b>Comments</b><span>${u}</span></p>
        <p class="info-item"><b>Downloads</b><span>${f}</span></p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){l.innerHTML=""}function L(){p.classList.add("is-visible")}function q(){p.classList.remove("is-visible")}const v=document.querySelector(".form");v.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget.querySelector("input").value.trim();if(r===""){n.warning({message:"Please enter a search term",position:"topRight"});return}b(),L();try{const o=await y(r);o.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(o.hits)}catch(o){n.error({title:"Error",message:`An error occurred: ${o.message}`,position:"topRight"})}finally{q(),s.target.reset()}});
//# sourceMappingURL=index.js.map
