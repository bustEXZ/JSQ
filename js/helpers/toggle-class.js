export const toggleClass = (target) => {
  nav.querySelector(".active").classList.remove("active");
  target.classList.add("active");
};
