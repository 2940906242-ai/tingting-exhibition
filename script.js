const copy = {
  en: {
    pageTitle: "tingting | A Private Photographic Exhibition",
    pageDescription:
      "tingting, a private online photographic exhibition in five quiet movements.",
    introKicker: "A private photographic exhibition",
    introNote: "Twenty photographs in five quiet movements.",
    enter: "Enter the exhibition",
    navChapters: "Chapters",
    navPhotos: "Photographs",
    archive: "Private archive",
    openingTitle: "Five ways of holding a moment.",
    openingBody:
      "A small collection shaped by cool light, open air, passing rooms, and the gentle distance between looking and remembering.",
    loading: "Preparing the photographs",
    footer: "A private collection, kept in light.",
    previous: "Previous",
    next: "Next",
    close: "Close",
    switchLanguage: "Switch to Chinese",
    openPhoto: "Open full photograph",
    playMusic: "Play music",
    pauseMusic: "Pause music",
    musicUnavailable: "Music unavailable",
    count: (current, total) => `${current} of ${total}`,
  },
  zh: {
    pageTitle: "tingting | 私人线上摄影展",
    pageDescription: "tingting 的私人线上摄影展，二十张照片，五段安静的片刻。",
    introKicker: "私人线上摄影展",
    introNote: "二十张照片，五段安静的片刻。",
    enter: "进入展览",
    navChapters: "章节",
    navPhotos: "照片",
    archive: "私人影像档案",
    openingTitle: "留住片刻的五种方式。",
    openingBody:
      "这组影像由冷色光线、开阔空气、途经的房间，以及凝视与记忆之间温柔的距离共同组成。",
    loading: "正在准备照片",
    footer: "一份被光轻轻收藏的私人影像。",
    previous: "上一张",
    next: "下一张",
    close: "关闭",
    switchLanguage: "Switch to English",
    openPhoto: "打开完整照片",
    playMusic: "播放音乐",
    pauseMusic: "暂停音乐",
    musicUnavailable: "音乐暂不可用",
    count: (current, total) => `第 ${current} 张，共 ${total} 张`,
  },
};

const chapters = [
  {
    id: "aisles",
    title: {
      en: "Aisles of Small Wonder",
      zh: "小小惊喜的过道",
    },
    description: {
      en: "Bright shelves, small gestures, and the pleasure of being briefly surprised.",
      zh: "明亮货架、细小动作，以及偶然遇见惊喜时的快乐。",
    },
  },
  {
    id: "blue-light",
    title: {
      en: "Blue Light, Quiet Mood",
      zh: "蓝光里的安静心绪",
    },
    description: {
      en: "A cooler room where expression slows and every glance keeps its own weather.",
      zh: "冷色房间让表情慢下来，每一次注视都有自己的天气。",
    },
  },
  {
    id: "green",
    title: {
      en: "Where the Green Begins",
      zh: "绿意开始的地方",
    },
    description: {
      en: "Grass, flowers, and the soft permission to be unhurried.",
      zh: "青草、花朵，以及一种允许时间慢下来的温柔。",
    },
  },
  {
    id: "sea-stone",
    title: {
      en: "Sea, Stone, and Distance",
      zh: "海、岩石与远方",
    },
    description: {
      en: "Open water, winter trees, and the distance that lets a portrait breathe.",
      zh: "开阔海面、冬日树影，以及让肖像得以呼吸的距离。",
    },
  },
  {
    id: "flowers",
    title: {
      en: "Flowers Keep the Reflection",
      zh: "花影留住倒影",
    },
    description: {
      en: "Mirrors, petals, and late light returning the gaze.",
      zh: "镜面、花瓣，以及在晚光中返回的目光。",
    },
  },
];

const photographs = [
  {
    chapter: "aisles",
    file: "tingting-01",
    width: 1279,
    height: 1706,
    alt: {
      en: "tingting browsing a bright shop aisle in a white dress",
      zh: "身穿白裙的 tingting 站在明亮的商店货架前",
    },
  },
  {
    chapter: "aisles",
    file: "tingting-02",
    width: 1279,
    height: 1706,
    alt: {
      en: "tingting wearing a pale hat in a colorful market",
      zh: "戴浅色帽子的 tingting 身处色彩丰富的商店",
    },
  },
  {
    chapter: "aisles",
    file: "tingting-03",
    width: 1279,
    height: 1706,
    alt: {
      en: "tingting posing beneath the lights of a busy store",
      zh: "tingting 在热闹商店的灯光下留影",
    },
  },
  {
    chapter: "aisles",
    file: "tingting-04",
    width: 1279,
    height: 1706,
    alt: {
      en: "tingting reflected beside an illustrated wall",
      zh: "tingting 与墙面插画一同映在镜中",
    },
  },
  {
    chapter: "aisles",
    file: "tingting-05",
    width: 1279,
    height: 1706,
    alt: {
      en: "tingting standing beside a museum sign",
      zh: "tingting 站在展馆标识旁",
    },
  },
  {
    chapter: "blue-light",
    file: "tingting-06",
    width: 1280,
    height: 1280,
    alt: {
      en: "tingting holding a small flower against deep blue light",
      zh: "tingting 在深蓝光线中举起一朵小花",
    },
  },
  {
    chapter: "blue-light",
    file: "tingting-07",
    width: 1700,
    height: 1280,
    alt: {
      en: "tingting smiling beneath violet and blue interior light",
      zh: "tingting 在蓝紫色室内光线下微笑",
    },
  },
  {
    chapter: "blue-light",
    file: "tingting-08",
    width: 1700,
    height: 1280,
    alt: {
      en: "Close portrait of tingting in soft colored light",
      zh: "柔和彩色光线下的 tingting 近景肖像",
    },
  },
  {
    chapter: "blue-light",
    file: "tingting-09",
    width: 1700,
    height: 1280,
    alt: {
      en: "tingting resting in a quiet blue-lit room",
      zh: "tingting 靠坐在安静的蓝色灯光中",
    },
  },
  {
    chapter: "green",
    file: "tingting-10",
    width: 1279,
    height: 1706,
    alt: {
      en: "tingting sitting beside pink flowers in a sun hat",
      zh: "戴遮阳帽的 tingting 坐在粉色花丛旁",
    },
  },
  {
    chapter: "green",
    file: "tingting-11",
    width: 1706,
    height: 1279,
    alt: {
      en: "tingting standing beside a small garden shelter",
      zh: "tingting 站在花园的小棚屋旁",
    },
  },
  {
    chapter: "green",
    file: "tingting-12",
    width: 964,
    height: 1284,
    alt: {
      en: "tingting sitting on green grass beneath a tree",
      zh: "tingting 坐在树旁的绿色草地上",
    },
  },
  {
    chapter: "green",
    file: "tingting-13",
    width: 1206,
    height: 1602,
    alt: {
      en: "tingting in a garden of pale leaves and open sky",
      zh: "tingting 身处浅色叶片与开阔天空之间",
    },
  },
  {
    chapter: "sea-stone",
    file: "tingting-14",
    width: 1206,
    height: 892,
    alt: {
      en: "tingting silhouetted among winter trees",
      zh: "冬日树影中的 tingting 剪影",
    },
  },
  {
    chapter: "sea-stone",
    file: "tingting-15",
    width: 904,
    height: 1184,
    alt: {
      en: "tingting seated inside a weathered stone shelter",
      zh: "tingting 坐在斑驳的石质空间里",
    },
  },
  {
    chapter: "sea-stone",
    file: "tingting-16",
    width: 1706,
    height: 1279,
    alt: {
      en: "tingting seated on rocks beside the sea",
      zh: "tingting 坐在海边的岩石上",
    },
  },
  {
    chapter: "sea-stone",
    file: "tingting-17",
    width: 1024,
    height: 1820,
    alt: {
      en: "tingting in a grey sweater under a clear blue sky",
      zh: "tingting 身穿灰色毛衣站在清澈蓝天下",
    },
  },
  {
    chapter: "flowers",
    file: "tingting-18",
    width: 1279,
    height: 1706,
    alt: {
      en: "tingting reflected beside a screen of flowers",
      zh: "tingting 与屏幕中的花影一同映入镜面",
    },
  },
  {
    chapter: "flowers",
    file: "tingting-19",
    width: 1279,
    height: 1706,
    alt: {
      en: "tingting taking a portrait beside a textured stone wall",
      zh: "tingting 在纹理石墙旁拍摄肖像",
    },
  },
  {
    chapter: "flowers",
    file: "tingting-20",
    width: 960,
    height: 1280,
    alt: {
      en: "tingting framed by warm sunflower reflections",
      zh: "tingting 被温暖的向日葵倒影环绕",
    },
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
const languageToggle = document.querySelector("#languageToggle");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxChapter = document.querySelector("#lightboxChapter");
const lightboxCount = document.querySelector("#lightboxCount");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
const closeButton = document.querySelector("#closeButton");
const musicControl = document.querySelector("#musicControl");
const musicLabel = document.querySelector("#musicLabel");
const backgroundMusic = document.querySelector("#backgroundMusic");

let activePhotoIndex = 0;
let touchStartX = 0;
let currentLanguage = getInitialLanguage();
let musicState = "paused";
let volumeTimer = null;

function getInitialLanguage() {
  try {
    const stored = window.localStorage.getItem("tingting-language");
    if (stored === "en" || stored === "zh") return stored;
  } catch {
    // Local storage can be unavailable in strict privacy modes.
  }
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function text(key) {
  return copy[currentLanguage][key];
}

function createPhoto(photo) {
  const figure = document.createElement("figure");
  figure.className = "photo";

  const button = document.createElement("button");
  button.className = "photo-button";
  button.type = "button";
  button.dataset.photoIndex = photo.index;
  button.setAttribute(
    "aria-label",
    `${text("openPhoto")}: ${photo.alt[currentLanguage]}`,
  );

  const image = document.createElement("img");
  image.src = photo.thumb;
  image.alt = photo.alt[currentLanguage];
  image.width = photo.width;
  image.height = photo.height;
  image.loading = photo.index < 2 ? "eager" : "lazy";
  image.decoding = "async";

  const error = document.createElement("span");
  error.className = "photo-error";
  error.textContent =
    currentLanguage === "zh"
      ? "这张照片暂时无法加载。"
      : "This photograph could not be loaded.";

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
    title.dataset.chapterTitle = chapter.id;
    title.textContent = chapter.title[currentLanguage];

    const description = document.createElement("p");
    description.dataset.chapterDescription = chapter.id;
    description.textContent = chapter.description[currentLanguage];
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

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = text("pageTitle");
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", text("pageDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text(element.dataset.i18n);
  });

  document.querySelectorAll("[data-chapter-link]").forEach((element) => {
    const chapter = chapters.find((item) => item.id === element.dataset.chapterLink);
    element.textContent = chapter.title[language];
  });

  document.querySelectorAll("[data-chapter-title]").forEach((element) => {
    const chapter = chapters.find((item) => item.id === element.dataset.chapterTitle);
    element.textContent = chapter.title[language];
  });

  document.querySelectorAll("[data-chapter-description]").forEach((element) => {
    const chapter = chapters.find(
      (item) => item.id === element.dataset.chapterDescription,
    );
    element.textContent = chapter.description[language];
  });

  document.querySelectorAll("[data-photo-index]").forEach((button) => {
    const photo = photographs[Number(button.dataset.photoIndex)];
    const image = button.querySelector("img");
    image.alt = photo.alt[language];
    button.setAttribute("aria-label", `${text("openPhoto")}: ${photo.alt[language]}`);
  });

  languageToggle.textContent = language === "en" ? "中" : "EN";
  languageToggle.setAttribute("aria-label", text("switchLanguage"));
  updateMusicControl();

  if (lightbox.open) updateLightbox();

  try {
    window.localStorage.setItem("tingting-language", language);
  } catch {
    // The language still works for this visit.
  }
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
  playMusic();
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
  lightboxImage.alt = photo.alt[currentLanguage];
  lightboxImage.src = photo.full;
  lightboxChapter.textContent = chapter.title[currentLanguage];
  lightboxCount.textContent = text("count")(
    activePhotoIndex + 1,
    photographs.length,
  );
}

function showRelativePhoto(offset) {
  activePhotoIndex =
    (activePhotoIndex + offset + photographs.length) % photographs.length;
  updateLightbox();
}

function fadeVolume(target, duration, onComplete) {
  window.clearInterval(volumeTimer);
  const start = backgroundMusic.volume;
  const steps = Math.max(1, Math.round(duration / 50));
  let step = 0;

  volumeTimer = window.setInterval(() => {
    step += 1;
    const progress = step / steps;
    backgroundMusic.volume = Math.max(
      0,
      Math.min(1, start + (target - start) * progress),
    );
    if (step < steps) return;
    window.clearInterval(volumeTimer);
    volumeTimer = null;
    onComplete?.();
  }, 50);
}

function updateMusicControl() {
  musicControl.classList.toggle("is-playing", musicState === "playing");
  musicControl.setAttribute("aria-pressed", musicState === "playing" ? "true" : "false");

  if (musicState === "unavailable") {
    musicLabel.textContent = text("musicUnavailable");
    musicControl.disabled = true;
    return;
  }

  musicLabel.textContent =
    musicState === "playing" ? text("pauseMusic") : text("playMusic");
  musicControl.setAttribute(
    "aria-label",
    `${musicLabel.textContent}: ${
      currentLanguage === "zh" ? "李欣芸《湖岸月光》" : "Lakeside Moonlight"
    }`,
  );
}

function playMusic() {
  backgroundMusic.volume = 0;
  const playPromise = backgroundMusic.play();
  if (!playPromise) return;

  playPromise
    .then(() => {
      musicState = "playing";
      updateMusicControl();
      fadeVolume(0.42, 1200);
    })
    .catch(() => {
      musicState = "paused";
      updateMusicControl();
    });
}

function pauseMusic() {
  fadeVolume(0, 700, () => {
    backgroundMusic.pause();
    musicState = "paused";
    updateMusicControl();
  });
}

enterButton.addEventListener("click", enterExhibition);

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "zh" : "en");
});

musicControl.addEventListener("click", () => {
  if (musicState === "playing") {
    pauseMusic();
  } else {
    playMusic();
  }
});

backgroundMusic.addEventListener("error", () => {
  musicState = "unavailable";
  updateMusicControl();
});

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
applyLanguage(currentLanguage);
