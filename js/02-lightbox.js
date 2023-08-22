import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((picture) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<li><a class="gallery__item" href="${picture.original}">
  <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
</a></li>`
  );
});
for (let i = 0; i < galleryItems.length; i++) {
  let link = gallery.childNodes[i].firstChild;
  link.style.height = "100%";
  link.style.display = "block";
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
