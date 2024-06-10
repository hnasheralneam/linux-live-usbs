const imgs = document.querySelectorAll("img");
const fullPage = document.querySelector(".fullpage");

imgs.forEach(img => {
   img.addEventListener("click", () => {
      fullPage.style.backgroundImage = "url(" + img.src + ")";
      fullPage.style.display = "block";
   });
});