import assets from "../assets.js";
import { generatePage } from "../helpers/generate-page.js";
import { hljs } from "../hl.js";
import { toggleClass } from "./toggle-class.js";

export const createGame = () => {
  if (main.querySelector("#game_box") !== null) {
    game_box.remove();
  }

  top_btn.style.display = "none";

  const template = `
  <div id="game_box">
    <button id="close_btn">Закрыть</button>
    <h3 id="game_title">Каким будет вывод?</h3>
    <output id="score"></output>
    <output id="progress"></output>
    <section id="question_box"></section>
  </div>
  `;

  main.innerHTML = template;

  close_btn.addEventListener(
    "click",
    (ev) => {
      ev.target.parentElement.remove();
      const num = localStorage.getItem("pageNum");
      toggleClass(nav_list.querySelector(`[data-url="${num}"]`).parentElement);
      generatePage(num);
    },
    {
      once: true,
    }
  );

  const set = new Set();

  while (set.size < 25) {
    const i = Math.floor(Math.random() * (assets.length + 1));

    if (i > assets.length) {
      i = 0;
    }

    set.add(assets[i]);
  }

  const array = [...set];

  let rightAnswers = 0;
  let wrongAnswers = 0;
  let i = 0;

  updateScoreAndProgress();

  function updateScoreAndProgress() {
    score.innerHTML = `<span class="right">${rightAnswers}</span> - <span class="wrong">${wrongAnswers}</span>`;

    progress.textContent = `${i + 1} / ${array.length}`;
  }

  createQuestion();

  function createQuestion() {
    if (i === array.length) {
      showResult();
      return;
    }

    const { question, rightAnswer, explanation } = array[i];

    const answers = array[i].answers.trim().split("\n");

    const template = `
    <pre>
      <code class="lang-js">
        ${question}
      </code>
    </pre>
    <ul class="answers_list">
      ${answers.reduce((html, i) => (html += `<li class="answer_item">${i}</li>`), "")}
    </ul>
    <button id="answer_btn" class="answer_btn">Ответить</button>
    <details>
      <summary>Показать правильный ответ</summary>
      <h6>Правильный ответ: ${rightAnswer}</h6>
      <p>${explanation}</p>
    </details>
    `;

    question_box.innerHTML = template;

    hljs(globalThis);

    question_box.querySelector(".answer_item").classList.add("checked");

    question_box.addEventListener("click", (ev) => {
      if (ev.target.className === "answer_item") {
        if (ev.target.classList.contains("checked")) {
          return;
        }

        question_box.querySelector(".checked").classList.remove("checked");

        ev.target.classList.add("checked");
      }
    });

    answer_btn.addEventListener(
      "click",
      () => {
        const answers = [...question_box.querySelectorAll(".answer_item")];

        const userAnswerEl = answers.find((a) => a.classList.contains("checked"));
        const rightAnswerEl = answers.find((a) => a.textContent[0] === rightAnswer);

        const userAnswer = userAnswerEl.textContent.substr(0, 1);

        checkAnswer(userAnswerEl, rightAnswerEl, userAnswer, rightAnswer, answer_btn);
      },
      {
        once: true,
      }
    );
  }

  function checkAnswer(userAnswerEl, rightAnswerEl, userAnswer, rightAnswer, button) {
    let isRight = true;

    if (userAnswer === rightAnswer) {
      rightAnswers++;
    } else {
      wrongAnswers++;
      isRight = false;
    }

    if (isRight) {
      userAnswerEl.classList.add("right");
    } else {
      userAnswerEl.classList.add("wrong");
      rightAnswerEl.click();
      rightAnswerEl.classList.add("right");
      question_box.querySelector("summary").click();
    }

    button.textContent = "Дальше";

    button.addEventListener(
      "click",
      () => {
        i++;
        updateScoreAndProgress();
        createQuestion();
      },
      {
        once: true,
      }
    );
  }

  function showResult() {
    const percentage = ((rightAnswers / array.length) * 100).toFixed();

    let result;

    if (percentage >= 80) {
      result = `Отличный результат! Вы прекрасно знаете JavaScript.`;
    } else if (percentage > 50) {
      result = `Неплохой результат, но есть к чему стремиться. Дерзайте!`;
    } else {
      result = `Похоже, вы только начали изучать JavaScript. Удачи!`;
    }

    game_title.remove();
    score.remove();
    progress.remove();

    question_box.innerHTML = `
        <h3>Ваш результат</h3>
        <p>Правильных ответов: <span class="right">${rightAnswers}</span></p>
        <p>Неправильных ответов: <span class="wrong">${wrongAnswers}</span></p>
        <p>Процент правильных ответов: ${percentage}</p>
        <p>${result}</p>
        `;
  }
};
