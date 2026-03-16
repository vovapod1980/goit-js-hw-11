import{a as l,S as p,i as c}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="55036225-8ce8ea9a0711c46d4e7453374";l.defaults.baseURL="https://pixabay.com/api/";async function y(s){return(await l.get("",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const u=document.querySelector(".gallery"),n=document.querySelector(".loader-container"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:d,downloads:f})=>`
    <li class="gallery-item">
      <!-- Обгортка-посилання для SimpleLightbox -->
      <a class="gallery-link" href="${i}">
        <img 
          class="gallery-image" 
          src="${o}" 
          alt="${e}" 
          title="${e}" 
        />
      </a>
      <div class="info">
        <div class="info-item"><b>Likes</b><span>${t}</span></div>
        <div class="info-item"><b>Views</b><span>${a}</span></div>
        <div class="info-item"><b>Comments</b><span>${d}</span></div>
        <div class="info-item"><b>Downloads</b><span>${f}</span></div>
      </div>
    </li>`).join("");u.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){u.innerHTML=""}function v(){n&&n.classList.add("is-visible")}function L(){n&&n.classList.remove("is-visible")}const S=document.querySelector(".form");S.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget.querySelector("input"),o=r?r.value.trim():"";if(o===""){c.warning({message:"Please enter a search term",position:"topRight"});return}b(),v();try{const i=await y(o);i.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(i.hits)}catch(i){c.error({title:"Error",message:`An error occurred: ${i.message}`,position:"topRight"})}finally{L(),s.target.reset()}});
//# sourceMappingURL=index.js.map
