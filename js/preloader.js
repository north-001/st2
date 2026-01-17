// ================================
// Управляет поведением прелоадера
// ================================

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Короткая задержка после полной загрузки
  setTimeout(() => {
    // Добавляем класс для плавного исчезновения
    preloader.classList.add("hidden");

    // После окончания transition полностью скрываем элемент
    preloader.addEventListener("transitionend", () => {
      preloader.style.display = "none";
    });

    // Запускаем все остальные скрипты
    initializeAfterLoadScripts();
  }, 300); // ← задержка в миллисекундах
});

// Эта функция вызывается после загрузки и готовности DOM
function initializeAfterLoadScripts() {}
