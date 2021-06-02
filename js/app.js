const shareButton = document.querySelector(".element__share")
const sharePopup = document.querySelector(".element__popup")


shareButton.addEventListener("click", () => {
    sharePopup.classList.toggle("active")
    shareButton.classList.toggle("active")
})