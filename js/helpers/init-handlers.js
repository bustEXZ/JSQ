import { generatePage } from "./generate-page.js";
import { toggleClass } from "./toggle-class.js";
import { createGame } from "./create-game.js";

export const initHandlers = () => {
  nav_list.addEventListener("click", (ev) => {
    if (ev.target.className === "link") {
      const { url: num } = ev.target.dataset;

      generatePage(num);

      toggleClass(ev.target.parentElement);
    } else if (ev.target.className === "list_item" && ev.target.children[0].className === "link") {
      const { url: num } = ev.target.children[0].dataset;

      generatePage(num);

      toggleClass(ev.target);
    } else if (ev.target.id === "game_btn") {
      createGame();
      toggleClass(ev.target.parentElement);
    } else if (ev.target.className === "list_item" && ev.target.children[0].id === "game_btn") {
      createGame();
      toggleClass(ev.target);
    }
  });
};
