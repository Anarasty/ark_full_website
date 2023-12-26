console.log("tes1");

// Получаем ссылки на элементы модального окна и кнопки "Посмотреть больше"
const modals = document.querySelectorAll(".modal");
const modalBackground = document.getElementById("modal-background");
const viewButtons = document.querySelectorAll("#release_modal_btn");

// Добавляем обработчики событий для кнопок "Посмотреть больше"
viewButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Открываем соответствующее модальное окно и задний фон
    modals[index].style.display = "block";
    modalBackground.style.display = "block";
    setTimeout(() => {
      modalBackground.style.opacity = "1";
    }, 10);
  });
});

// Добавляем обработчики событий для кнопок "Закрыть" в модальных окнах
modals.forEach((modal, index) => {
  const closeButton = modal.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    modalBackground.style.opacity = "0";
    setTimeout(() => {
      modalBackground.style.display = "none";
    }, 300);
  });
});

// Обрезание текста при превышении символов
const maxCharacters = 200;
const releaseLogBoxInfoDescr = document.querySelector(
  ".release_log_box_info_descr"
);

if (releaseLogBoxInfoDescr) {
  const textContent = releaseLogBoxInfoDescr.textContent.trim();

  if (textContent.length > maxCharacters) {
    const truncatedText = textContent.substring(0, maxCharacters) + "...";
    releaseLogBoxInfoDescr.textContent = truncatedText;
  }
}
