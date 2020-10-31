import assets from "../assets.js";
import { hljs } from "../hl.js";
import { createObserver } from "./create-observer.js";

export const generatePage = (min) => {
  min = +min;
  let max = 0;
  if (min === 200) {
    max = 232;
  } else {
    max = min + 50;
  }

  let html = "<h2>Каким будет вывод?</h2>";

  for (let i = min; i < max; i++) {
    const { question, answers, rightAnswer, explanation } = assets[i];

    const answersArray = answers.trim().split("\n");

    html += `
    <section id="${i + 1}">
      <h3>Вопрос № ${i + 1}</h3>
      <pre>
        <code class="lang-js">
          ${question}
        </code>
      </pre>
      <ul>
      ${answersArray.reduce(
        (html, answer) =>
          (html += `
              <li>${answer}</li>
          `),
        ""
      )}
      </ul>
      <details>
        <summary>Ответ</summary>
        <h4>Правильный ответ: ${rightAnswer}</h4>
        <p>${explanation}</p>
      </details>
    </section>
    `;
  }

  html += `<a href="#top"><button id="top_btn">Наверх</button></a>`;

  main.innerHTML = html;

  hljs(globalThis);
  createObserver();
  localStorage.setItem("pageNum", min);
};
