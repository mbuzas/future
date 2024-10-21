const menuButton = document.querySelector(".menu-icon");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
