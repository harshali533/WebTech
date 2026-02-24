// Smart Study Planner - Main JavaScript

// =======================
// DOM ELEMENTS
// =======================

const subjectForm = document.getElementById("subjectForm");
const subjectName = document.getElementById("subjectName");
const subjectNote = document.getElementById("subjectNote");
const subjectList = document.getElementById("subjectList");

const plannerForm = document.getElementById("plannerForm");
const taskTitle = document.getElementById("taskTitle");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const plannerList = document.getElementById("plannerList");

const loadQuizBtn = document.getElementById("loadQuizBtn");
const quizArea = document.getElementById("quizArea");
const questionContainer = document.getElementById("questionContainer");
const nextBtn = document.getElementById("nextBtn");
const quizResult = document.getElementById("quizResult");
const progressSummary = document.getElementById("progressSummary");

// =======================
// DATA STORAGE
// =======================

let subjects = JSON.parse(localStorage.getItem("subjects")) || [];
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

// =======================
// UTILITY FUNCTIONS
// =======================

function saveData() {
    localStorage.setItem("subjects", JSON.stringify(subjects));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

function formatDateTime(date) {
    return date.toLocaleString();
}

// =======================
// SUBJECT SECTION
// =======================

subjectForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newSubject = {
        id: generateId(),
        name: subjectName.value,
        note: subjectNote.value,
    };

    subjects.push(newSubject);
    saveData();
    renderSubjects();
    subjectForm.reset();
});

function renderSubjects() {
    subjectList.innerHTML = "";

    subjects.forEach((sub) => {
        const li = document.createElement("li");
        li.innerHTML = `
      <div>
        <strong>${sub.name}</strong>
        <div style="font-size:0.9em;color:gray">${sub.note}</div>
      </div>
    `;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";

        delBtn.addEventListener("click", () => {
            subjects = subjects.filter((s) => s.id !== sub.id);
            saveData();
            renderSubjects();
            renderProgress();
        });

        li.appendChild(delBtn);
        subjectList.appendChild(li);
    });

    renderProgress();
}

// =======================
// PLANNER SECTION
// =======================

plannerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newTask = {
        id: generateId(),
        title: taskTitle.value,
        datetime: new Date(`${taskDate.value}T${taskTime.value}`),
    };

    tasks.push(newTask);
    saveData();
    renderTasks();
    plannerForm.reset();
});

function renderTasks() {
    plannerList.innerHTML = "";

    tasks
        .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
        .forEach((task) => {
            const li = document.createElement("li");
            li.innerHTML = `
        <div>
          ${task.title}
          <div style="font-size:0.85em;color:gray">
            ${formatDateTime(new Date(task.datetime))}
          </div>
        </div>
      `;

            const doneBtn = document.createElement("button");
            doneBtn.textContent = "Done";

            doneBtn.addEventListener("click", () => {
                tasks = tasks.filter((t) => t.id !== task.id);
                saveData();
                renderTasks();
                renderProgress();
            });

            li.appendChild(doneBtn);
            plannerList.appendChild(li);
        });

    renderProgress();
}

// =======================
// QUIZ SECTION
// =======================

loadQuizBtn.addEventListener("click", async () => {
    quizQuestions = await loadQuiz();
    currentQuestionIndex = 0;
    userAnswers = [];
    quizArea.classList.remove("hidden");
    quizResult.classList.add("hidden");
    showQuestion();
});

async function loadQuiz() {
    return [
        {
            question: "Which keyword declares a block-scoped variable?",
            options: ["var", "let", "int", "const"],
            answer: "let",
        },
        {
            question: "Which array method transforms every element?",
            options: ["filter", "map", "reduce", "forEach"],
            answer: "map",
        },
        {
            question: "Which symbol is used for template literals?",
            options: ['"', "'", "`", "$"],
            answer: "`",
        },
    ];
}

function showQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    questionContainer.innerHTML = `<h3>${q.question}</h3>`;

    q.options.forEach((option) => {
        const btn = document.createElement("button");
        btn.textContent = option;

        btn.addEventListener("click", () => {
            userAnswers[currentQuestionIndex] = option;
        });

        questionContainer.appendChild(btn);
    });

    nextBtn.onclick = () => {
        if (!userAnswers[currentQuestionIndex]) {
            alert("Please select an answer!");
            return;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            finishQuiz();
        }
    };
}

function finishQuiz() {
    const score = quizQuestions.reduce((total, q, index) => {
        return total + (q.answer === userAnswers[index] ? 1 : 0);
    }, 0);

    quizArea.classList.add("hidden");
    quizResult.classList.remove("hidden");
    quizResult.innerHTML = `<h3>Your Score: ${score} / ${quizQuestions.length}</h3>`;

    renderProgress(score, quizQuestions.length);
}

// =======================
// PROGRESS SECTION
// =======================

function renderProgress(lastScore = null, total = null) {
    let html = `<p>Total Subjects: ${subjects.length}</p>`;
    html += `<p>Pending Tasks: ${tasks.length}</p>`;

    if (lastScore !== null) {
        const percent = Math.round((lastScore / total) * 100);
        html += `<p>Last Quiz: ${percent}%</p>`;
    }

    progressSummary.innerHTML = html;
}

// =======================
// INITIAL LOAD
// =======================

renderSubjects();
renderTasks();