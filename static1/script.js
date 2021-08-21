let aboutLink = document.querySelector("#aboutL");
let aboutPage = document.querySelector("#about");

let galleryLink = document.querySelector("#galleryL");
let contactLink = document.querySelector("#contactL");

aboutLink.addEventListener("click", aboutPage, false);

function aboutPage(e){
  aboutPage.scrollIntoView({
    behavior: "smooth"
  });
}