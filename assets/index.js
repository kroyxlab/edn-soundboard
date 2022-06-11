const c=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};c();var s=[{titulo:"Borra la foto",archivo:"borraLaFoto"},{titulo:"Cero grasas trans",archivo:"ceroGrasasTrans"},{titulo:"Cerveza Ipa",archivo:"cervezaIpa"},{titulo:"Disculpa pedofilo",archivo:"disculpaPedofilo"},{titulo:"Disculpa si te ofendo",archivo:"disculpaSiTeOfendo"},{titulo:"En las nalgas tuyas",archivo:"enLasNalgasTuyas"},{titulo:"\xBFEres Millenial?",archivo:"eresMillenial"},{titulo:"Escuchame esto loca",archivo:"escuchameEstoLoca"},{titulo:"Soy un goloso",archivo:"goloso"},{titulo:"He sido un delincuente",archivo:"heSidoUnDelincuente"},{titulo:"Izquierda",archivo:"izquierda"},{titulo:"La cague",archivo:"laCague"},{titulo:"Messi se va",archivo:"messiSeVa"},{titulo:"Nadie ve mis poss",archivo:"nadieVeMisPoss"},{titulo:"Que mandarria compadre",archivo:"queMandarriaCompadre"},{titulo:"Oye vale pero respeta",archivo:"respeta"},{titulo:"\xBFTe ofendiste?",archivo:"teOfendiste"},{titulo:"\xBFTe vas a volver a ofender?",archivo:"teVasAVolverAOfender"},{titulo:"Usted es bellisimo compadre",archivo:"ustedEsBellisimo"},{titulo:"Vinimos a visitarte",archivo:"vinimosAVisitarte"},{titulo:"Abre la boca hay",archivo:"abreLaBocaHay"},{titulo:"Bonchincheros y Vergonsozos",archivo:"byv"},{titulo:"\xBFQue eres tu una endorfina?",archivo:"endorfina"},{titulo:"Me pegaron una paloma en la cabeza",archivo:"palomaEnLaCabeza"},{titulo:"Que bicho tan pargo",archivo:"queBichoTanPargo"},{titulo:"Hadouken",archivo:"hadouken"},{titulo:"Hadouken 2",archivo:"hadouken2"},{titulo:"Silencio llegaron los comediantes",archivo:"llegaronLosComediantes"},{titulo:"No te hagas la paja",archivo:"noTeHagasLaPaja"},{titulo:"Pa' vete la pata",archivo:"pata"},{titulo:"Ponte de punticas",archivo:"ponteDePunticas"},{titulo:"Que bicho mas perdedor",archivo:"queBichoMasPerdedor"},{titulo:"Que patetico",archivo:"quePatetico"}];const u=document.querySelector("#audios"),l=document.querySelector("#soundboard"),d=document.querySelector("#logo"),p=s.sort(()=>.5-Math.random()),g=s.map(e=>`
  <audio id="${e.archivo}" src="audios/${e.archivo}.mp3" preload="auto"></audio>
`).join(" "),h=p.map(e=>`
  <button class="boton" data-sonido="${e.archivo}">${e.titulo}</button>
`).join(" ");u.innerHTML=g;l.innerHTML=h;const v=()=>{s.forEach(e=>{const t=document.querySelector(`#${e.archivo}`);t.pause(),t.currentTime=0})};l.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"){const t=e.target.dataset.sonido,r=document.querySelector(`#${t}`);v(),r.play(),e.target.classList.add("activo"),e.target.setAttribute("disabled",""),d.classList.add("vibra"),r.addEventListener("pause",()=>{e.target.classList.remove("activo"),e.target.removeAttribute("disabled")}),r.addEventListener("ended",()=>{e.target.classList.remove("activo"),e.target.removeAttribute("disabled"),d.classList.remove("vibra")})}});"serviceWorker"in navigator&&navigator.serviceWorker.register("/edn-soundboard/sw.js",{scope:"/edn-soundboard/"}).then(e=>console.log("Registro de SW exitoso",e)).catch(e=>console.warn("Error al tratar de registrar el SW",e));