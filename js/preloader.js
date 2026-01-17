// ================================
// Управляет поведением прелоадера
// Скрывается ТОЛЬКО после загрузки всех изображений
// ================================

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const images = document.images;
  const totalImages = images.length;
  let loadedImages = 0;

  // Если изображений нет — скрываем сразу
  if (totalImages === 0) {
    hidePreloader();
    return;
  }

  Array.from(images).forEach((img) => {
    // Если картинка уже загружена (кеш)
    if (img.complete && img.naturalWidth !== 0) {
      imageLoaded();
    } else {
      img.addEventListener("load", imageLoaded);
      img.addEventListener("error", imageLoaded);
    }
  });

  function imageLoaded() {
    loadedImages++;
    if (loadedImages === totalImages) {
      hidePreloader();
    }
  }

  function hidePreloader() {
    // Плавное исчезновение
    preloader.classList.add("hidden");

    // После transition полностью скрываем
    preloader.addEventListener(
      "transitionend",
      () => {
        preloader.style.display = "none";
      },
      { once: true },
    );

    // Запускаем остальные скрипты
    initializeAfterLoadScripts();
  }
});

// Эта функция вызывается после загрузки изображений
function initializeAfterLoadScripts() {
  console.log("Все изображения загружены, сайт готов");
}
