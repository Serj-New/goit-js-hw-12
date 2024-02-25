import{a as v,i as d,S as I}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function p(o,e){const s="?key=42244518-9742bcd26a7acdceb08ce98f6",n="https://pixabay.com/api/",t=`&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,r=`${n}${s}${t}`,i={page:e,per_page:15};try{const c=(await v.get(r,{params:i})).data;if(c.hits&&c.hits.length>0)return c;E()}catch(m){console.error(m.message)}}const E=()=>d.error({message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"white",titleSize:"16px",messageColor:"white",messageSize:"16px",backgroundColor:"#ef4040",iconUrl:"/img/error.svg",iconColor:"white",position:"topRight",maxWidth:"432px"}),w={imageElem:document.querySelector(".gallery")};function C(o){const e=o.map(({webformatURL:n,largeImageURL:t,tags:r,likes:i,views:m,comments:c,downloads:S})=>`<li class="gallery-item">
            <a href="${t}">
                <img src="${n}" alt="${r}""/>
                <div class="img-info">
                    <p class="info-item"><b>Likes:</b>${i}</p>
                    <p class="info-item"><b>Views:</b>${m}</p>
                    <p class="info-item"><b>Comments:</b>${c}</p>
                    <p class="info-item"><b>Downloads:</b>${S}</p>
                </div>
            </a>
        </li>`).join("");w.imageElem.insertAdjacentHTML("beforeend",e),new I(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"}).refresh()}const u="image-tag",a={imgTagInput:document.querySelector("#search-img"),searchBtn:document.querySelector(".form"),imageElem:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".load-btn"),loader:document.querySelector(".backdrop")};let g,l,f;a.imgTagInput.addEventListener("input",O);a.searchBtn.addEventListener("submit",T);a.btnLoadMore.addEventListener("click",$);async function T(o){o.preventDefault(),g=a.imgTagInput.value.trim(),l=1,g===""?N():y();try{const e=await p(g,l);f=Math.ceil(e.totalHits/15),a.imageElem.innerHTML="",h(e.hits)}catch(e){console.log(e.message)}localStorage.removeItem(u),b(),L(),a.searchBtn.reset()}async function $(){l+=1,y();const o=await p(g,l);h(o.hits),b(),L();const e=a.imageElem.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*2})}function x(o,e){const s=JSON.stringify(e);localStorage.setItem(o,s)}function O(){const e={tag:a.imgTagInput.value.trim()};x(u,e)}function q(o){const e=localStorage.getItem(o);try{return JSON.parse(e)}catch(s){return console.error("Error parsing JSON from localStorage:",s),{}}}function B(){const o=q(u)||{};a.imgTagInput.value=o.tag||""}B();function h(o){C(o)}function M(){a.btnLoadMore.classList.remove("hidden")}function P(){a.btnLoadMore.classList.add("hidden")}function y(){a.loader.classList.add("is-open")}function b(){a.loader.classList.remove("is-open")}function L(){l>=f?(P(),z()):M()}const N=()=>d.error({message:"Please enter a search tag",titleColor:"white",titleSize:"16px",messageColor:"white",messageSize:"16px",backgroundColor:"#ef4040",iconUrl:"/img/error.svg",iconColor:"white",position:"topRight"}),z=()=>d.info({message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",position:"bottomCenter"});
//# sourceMappingURL=commonHelpers.js.map
