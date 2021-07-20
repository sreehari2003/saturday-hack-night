!function(){"use strict";const e=(e,t=!1)=>(e=e.trim(),t?[...document.querySelectorAll(e)]:document.querySelector(e)),t=(t,i,o,l=!1)=>{let s=e(i,l);s&&(l?s.forEach(e=>e.addEventListener(t,o)):s.addEventListener(t,o))},i=(e,t)=>{e.addEventListener("scroll",t)};let o=e("#navbar .scrollto",!0);const l=()=>{let t=window.scrollY+200;o.forEach(i=>{if(!i.hash)return;let o=e(i.hash);o&&(t>=o.offsetTop&&t<=o.offsetTop+o.offsetHeight?i.classList.add("active"):i.classList.remove("active"))})};window.addEventListener("load",l),i(document,l);const s=t=>{let i=e("#header"),o=i.offsetHeight;i.classList.contains("header-scrolled")||(o-=16);let l=e(t).offsetTop;window.scrollTo({top:l-o,behavior:"smooth"})};let a=e("#header");if(a){const e=()=>{window.scrollY>100?a.classList.add("header-scrolled"):a.classList.remove("header-scrolled")};window.addEventListener("load",e),i(document,e)}let n=e(".back-to-top");if(n){const e=()=>{window.scrollY>100?n.classList.add("active"):n.classList.remove("active")};window.addEventListener("load",e),i(document,e)}t("click",".mobile-nav-toggle",function(t){e("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),t("click",".navbar .dropdown > a",function(t){e("#navbar").classList.contains("navbar-mobile")&&(t.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),t("click",".scrollto",function(t){if(e(this.hash)){t.preventDefault();let i=e("#navbar");if(i.classList.contains("navbar-mobile")){i.classList.remove("navbar-mobile");let t=e(".mobile-nav-toggle");t.classList.toggle("bi-list"),t.classList.toggle("bi-x")}s(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&e(window.location.hash)&&s(window.location.hash)});let r=e("#preloader");r&&window.addEventListener("load",()=>{r.remove()}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:40},1200:{slidesPerView:3,spaceBetween:40}}}),window.addEventListener("load",()=>{let i=e(".portfolio-container");if(i){let o=new Isotope(i,{itemSelector:".portfolio-item"}),l=e("#portfolio-flters li",!0);l.forEach(function(e){e.classList.remove("filter-active")}),document.querySelector("#portfolio-flters > li:nth-child(1)").classList.add("filter-active"),o.arrange({filter:document.querySelector("#portfolio-flters > li:nth-child(1)").getAttribute("data-filter")}),o.on("arrangeComplete",function(){AOS.refresh()}),t("click","#portfolio-flters li",function(e){e.preventDefault(),l.forEach(function(e){e.classList.remove("filter-active")}),this.classList.add("filter-active"),o.arrange({filter:this.getAttribute("data-filter")}),o.on("arrangeComplete",function(){AOS.refresh()})},!0)}});GLightbox({selector:".portfolio-lightbox"});new Swiper(".portfolio-details-slider",{speed:400,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})})}();

{
  const endTime = new Date("Jul  21, 2021 17:00:00").getTime();
  window.end_timer_now = false;

  const timeDisplay = 
  [
    document.getElementById("days"),
    document.getElementById("hours"),
    document.getElementById("minutes"),
    document.getElementById("seconds")
  ]

  function showRegister()
  {
    document.getElementById("timer").hidden = true;

    for(const elem of document.getElementsByClassName("timer-end"))
      elem.hidden = false;
  }

  function updateTimer()
  {
    let timeLapsed = endTime - new Date().getTime();

    if(timeLapsed < 1 || window.end_timer_now)
      return showRegister();

    if(timeLapsed < 1000)
      return requestAnimationFrame(updateTimer);

    timeDisplay[0].innerText = Math.floor(timeLapsed / (1000*3600*24));
    timeDisplay[1].innerText = Math.floor((timeLapsed % (1000*3600*24)) / (1000*3600));
    timeDisplay[2].innerText = Math.floor((timeLapsed % (1000*3600)) / (1000*60));
    timeDisplay[3].innerText = Math.floor((timeLapsed % (1000*60)) / 1000);

    requestAnimationFrame(updateTimer);
  }

  requestAnimationFrame(updateTimer)
}