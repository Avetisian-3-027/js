document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".action-btn");
  const result = document.querySelector(".result");

  if (button && result) {
    button.addEventListener("click", handleClick);
  }

  function handleClick(event) {
    result.textContent = "Оптимізований клік!";
  }
})