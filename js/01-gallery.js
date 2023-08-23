import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((picture) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<li>
        <div class="gallery__item">
          <a class="gallery__link" href="${picture.original}">
            <img
              class="gallery__image"
              src="${picture.preview}"
              data-source="${picture.original}"
              alt="${picture.description}"
            />
          </a>
        </div>
      </li>`
  );
});

for (let i = 0; i < galleryItems.length; i += 1) {
  let imgDiv = gallery.childNodes[i].firstElementChild;
  imgDiv.style.height = "100%";
}

const selectImage = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedImg = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src="${selectedImg}">`
  );
  instance.show();

  const close = (event) => {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", close);
    }
  };
  document.addEventListener("keydown", close);
};

gallery.addEventListener("click", selectImage);
