import { generatePage } from "./helpers/generate-page.js";
import { findLastQuestion } from "./helpers/find-last-question.js";
import { initHandlers } from "./helpers/init-handlers.js";

(() => {
  const num = localStorage.getItem("pageNum") || 0;

  generatePage(num);

  findLastQuestion();

  initHandlers();
})();

navigator.serviceWorker.register("../sw.js").catch((er) => console.error(er));
