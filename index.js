const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 500,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: "#custom-pagination-container",
    clickable: true,

    type: "fraction",
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2); // Додаємо "0" перед номером і обираємо останні дві цифри
    },
    formatFractionTotal: function (number) {
      return ("0" + number).slice(-2); // Те ж саме для загальної кількості слайдів
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#custom-button-next",
    prevEl: "#custom-button-prev",
  },
  parallax: true,
  keyboard: {
    enabled: true,
  },
});
