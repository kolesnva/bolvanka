import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');



let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});