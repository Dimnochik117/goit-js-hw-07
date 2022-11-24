import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeryCardItems = createGaleryCardItems(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');

galleryContainerRef.insertAdjacentHTML('beforeend', galeryCardItems);


function createGaleryCardItems(galleryItems) {
  return galleryItems.map(({preview, original,description,}) =>{
    return `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img
        class="gallery__image"
        src= '${preview}'
        data-source= '${original}'
        alt='${description}'
      />
    </a>
  </div>`;
  }).join('');
}

function originalSrc(evt){
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const originalSrc = evt.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${originalSrc}", alt="${evt.target.alt}">`)

    instance.show();
    galleryContainerRef.addEventListener("keydown", evt => { 
        if (evt.code === "Escape") {
            instance.close();
            galleryContainerRef.removeEventListener;
    }
    })
    
}

galleryContainerRef.addEventListener("click", originalSrc);