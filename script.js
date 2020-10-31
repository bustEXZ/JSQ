import { generatePage } from "./js/helpers/generate-page.js";
import { findLastQuestion } from "./js/helpers/find-last-question.js";
import { initHandlers } from "./js/helpers/init-handlers.js";

(() => {
  const num = localStorage.getItem("pageNum") || 0;

  generatePage(num);

  findLastQuestion();

  initHandlers();
})();

navigator.serviceWorker.register("./sw.js").catch((er) => console.error(er));
