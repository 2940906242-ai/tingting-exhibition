const chapters = [
  {
    id: "aisles",
    title: "Aisles of Small Wonder",
    description:
      "Bright shelves, small gestures, and the pleasure of being briefly surprised.",
  },
  {
    id: "blue-light",
    title: "Blue Light, Quiet Mood",
    description:
      "A cooler room where expression slows and every glance keeps its own weather.",
  },
  {
    id: "green",
    title: "Where the Green Begins",
    description: "Grass, flowers, and the soft permission to be unhurried.",
  },
  {
    id: "sea-stone",
    title: "Sea, Stone, and Distance",
    description:
      "Open water, winter trees, and the distance that lets a portrait breathe.",
  },
  {
    id: "flowers",
    title: "Flowers Keep the Reflection",
    description: "Mirrors, petals, and late light returning the gaze.",
  },
];

const photographs = [
  {
    chapter: "aisles",
    file: "serena-01",
    width: 1279,
    height: 1706,
    alt: "Serena browsing a bright shop aisle in a white dress",
  },
  {
    chapter: "aisles",
    file: "serena-02",
    width: 1279,
    height: 1706,
    alt: "Serena wearing a pale hat in a colorful market",
  },
  {
    chapter: "aisles",
    file: "serena-03",
    width: 1279,
    height: 1706,
    alt: "Serena posing beneath the lights of a busy store",
  },
  {
    chapter: "aisles",
    file: "serena-04",
    width: 1279,
    height: 1706,
    alt: "Serena reflected beside an illustrated wall",
  },
  {
    chapter: "aisles",
    file: "serena-05",
    width: 1279,
    height: 1706,
    alt: "Serena standing beside a museum sign",
  },
  {
    chapter: "blue-light",
    file: "serena-06",
    width: 1280,
    height: 1280,
    alt: "Serena holding a small flower against deep blue light",
  },
  {
    chapter: "blue-light",
    file: "serena-07",
    width: 1700,
    height: 1280,
    alt: "Serena smiling beneath violet and blue interior light",
  },
  {
    chapter: "blue-light",
    file: "serena-08",
    width: 1700,
    height: 1280,
    alt: "Close portrait of Serena in soft colored light",
  },
  {
    chapter: "blue-light",
    file: "serena-09",
    width: 1700,
    height: 1280,
    alt: "Serena resting in a quiet blue-lit room",
  },
  {
    chapter: "green",
    file: "serena-10",
    width: 1279,
    height: 1706,
    alt: "Serena sitting beside pink flowers in a sun hat",
  },
  {
    chapter: "green",
    file: "serena-11",
    width: 1706,
    height: 1279,
    alt: "Serena standing beside a small garden shelter",
  },
  {
    chapter: "green",
    file: "serena-12",
    width: 964,
    height: 1284,
    alt: "Serena sitting on green grass beneath a tree",
  },
  {
    chapter: "green",
    file: "serena-13",
    width: 1206,
    height: 1602,
    alt: "Serena in a garden of pale leaves and open sky",
  },
  {
    chapter: "sea-stone",
    file: "serena-14",
    width: 1206,
    height: 892,
    alt: "Serena silhouetted among winter trees",
  },
  {
    chapter: "sea-stone",
    file: "serena-15",
    width: 904,
    height: 1184,
    alt: "Serena seated inside a weathered stone shelter",
  },
  {
    chapter: "sea-stone",
    file: "serena-16",
    width: 1706,
    height: 1279,
    alt: "Serena seated on rocks beside the sea",
  },
  {
    chapter: "sea-stone",
    file: "serena-17",
    width: 1024,
    height: 1820,
    alt: "Serena in a grey sweater under a clear blue sky",
  },
  {
    chapter: "flowers",
    file: "serena-18",
    width: 1279,
    height: 1706,
    alt: "Serena reflected beside a screen of flowers",
  },
  {
    chapter: "flowers",
    file: "serena-19",
    width: 1279,
    height: 1706,
    alt: "Serena taking a portrait beside a textured stone wall",
  },
  {
    chapter: "flowers",
    file: "serena-20",
    width: 960,
    height: 1280,
    alt: "Serena framed by warm sunflower reflections",
  },
].map((photo, index) => ({
  ...photo,
  index,
  thumb: `assets/thumbs/${photo.file}.webp`,
  full: `assets/full/${photo.file}.jpg`,
}));

const gallery = document.querySelector("#gallery");
const loading = document.querySelector("#galleryLoading");
const intro = document.querySelector("#intro");
const enterButton = document.querySelector("#enterButton");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxChapter = document.querySelector("#lightboxChapter");
const lightboxCount = document.querySelector("#lightboxCount");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
const closeButton = document.querySelector("#closeButton");

let activePhotoIndex = 0;
let touchStartX = 0;

function createPhoto(photo) {
  const figure = document.createElement("figure");
  figure.className = "photo";

  const button = document.createElement("button");
  button.className = "photo-button";
  button.type = "button";
  button.dataset.photoIndex = photo.index;
  button.setAttribute("aria-label", `Open full photograph: ${photo.alt}`);

  const image = document.createElement("img");
  image.src = photo.thumb;
  image.alt = photo.alt;
  image.width = photo.width;
  image.height = photo.height;
  image.loading = photo.index < 2 ? "eager" : "lazy";
  image.decoding = "async";

  const error = document.createElement("span");
  error.className = "photo-error";
  error.textContent = "This photograph could not be loaded.";

  image.addEventListener("error", () => figure.classList.add("has-error"));
  button.append(image, error);
  figure.append(button);
  return figure;
}

function renderGallery() {
  const fragment = document.createDocumentFragment();

  chapters.forEach((chapter) => {
    const section = document.createElement("section");
    section.className = "chapter";
    section.id = chapter.id;

    const header = document.createElement("header");
    header.className = "chapter-header reveal";

    const title = document.createElement("h2");
    title.textContent = chapter.title;

    const description = document.createElement("p");
    description.textContent = chapter.description;
    header.append(title, description);

    const masonry = document.createElement("div");
    masonry.className = "masonry";
    photographs
      .filter((photo) => photo.chapter === chapter.id)
      .forEach((photo) => masonry.append(createPhoto(photo)));

    section.append(header, masonry);
    fragment.append(section);
  });

  loading.remove();
  gallery.append(fragment);
  installRevealObserver();
}

function installRevealObserver() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal, .photo");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  targets.forEach((target, index) => {
    target.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    observer.observe(target);
  });
}

function enterExhibition() {
  intro.classList.add("is-leaving");
  document.body.classList.remove("is-intro");
  window.setTimeout(() => {
    intro.hidden = true;
    document.querySelector("#opening").focus({ preventScroll: true });
  }, 1100);
}

function openLightbox(index) {
  activePhotoIndex = index;
  updateLightbox();
  lightbox.showModal();
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.close();
  document.body.style.overflow = "";
  lightboxImage.classList.remove("is-ready");
}

function updateLightbox() {
  const photo = photographs[activePhotoIndex];
  const chapter = chapters.find((item) => item.id === photo.chapter);
  lightboxImage.classList.remove("is-ready");
  lightboxImage.alt = photo.alt;
  lightboxImage.src = photo.full;
  lightboxChapter.textContent = chapter.title;
  lightboxCount.textContent = `${activePhotoIndex + 1} of ${photographs.length}`;
}

function showRelativePhoto(offset) {
  activePhotoIndex =
    (activePhotoIndex + offset + photographs.length) % photographs.length;
  updateLightbox();
}

enterButton.addEventListener("click", enterExhibition);

gallery.addEventListener("click", (event) => {
  const button = event.target.closest("[data-photo-index]");
  if (!button) return;
  openLightbox(Number(button.dataset.photoIndex));
});

lightboxImage.addEventListener("load", () => {
  lightboxImage.classList.add("is-ready");
});

previousButton.addEventListener("click", () => showRelativePhoto(-1));
nextButton.addEventListener("click", () => showRelativePhoto(1));
closeButton.addEventListener("click", closeLightbox);
lightbox.querySelector("[data-close-lightbox]").addEventListener("click", closeLightbox);

lightbox.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeLightbox();
});

lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showRelativePhoto(-1);
  if (event.key === "ArrowRight") showRelativePhoto(1);
});

lightbox.addEventListener("pointerdown", (event) => {
  if (event.target.closest("button")) return;
  touchStartX = event.clientX;
});

lightbox.addEventListener("pointerup", (event) => {
  if (event.target.closest("button")) return;
  const distance = event.clientX - touchStartX;
  if (Math.abs(distance) < 52) return;
  showRelativePhoto(distance > 0 ? -1 : 1);
});

renderGallery();
