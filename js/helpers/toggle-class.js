export const toggleClass = (target) => {
  nav_list.querySelector(".active").classList.remove("active");
  target.classList.add("active");
};
