const lightbox = document.getElementById("lightbox");
const overlayImage = lightbox.querySelector("img");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    overlayImage.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});