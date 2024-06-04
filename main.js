const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const taskContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
const addTplace = document.querySelector("#task-place");
const editTplace=document.querySelector(".taskname")
let taskCount = 0;

// Task count
const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};

// Add task
const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }

  const task = `
  <div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <input type="text" class="edit-input" style="display:none;">
    <button class="edit">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="save" style="display:none;">
      <i class="fa-solid fa-save"></i>
    </button>
    <button class="delete">
      <i class="fa-solid fa-square-minus"></i>
    </button>
  </div>`;

  taskContainer.insertAdjacentHTML("beforeend", task);
  taskCount++;
  displayCount(taskCount);

  // Delete
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.onclick = () => {
      const taskDiv = button.closest(".task");
      const checkbox = taskDiv.querySelector(".task-check");

      if (!checkbox.checked) {
        taskCount -= 1;
      }
      taskDiv.remove();
      displayCount(taskCount);
    };
  });

  // Edit button
  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((editBtn) => {
    editBtn.onclick = (e) => {
      let taskDiv = e.target.closest(".task");
      let taskNameSpan = taskDiv.querySelector(".taskname");
      let editInput = taskDiv.querySelector(".edit-input");
      let saveButton = taskDiv.querySelector(".save");

      taskNameSpan.style.display = "none";
      editInput.value = taskNameSpan.innerText;
      editInput.style.display = "inline-block";
      saveButton.style.display = "inline-block";
      editBtn.style.display = "none";
    };
  })
  // Save button when edit
  const saveButtons = document.querySelectorAll(".save");
  saveButtons.forEach((saveBtn) => {
    saveBtn.onclick = (e) => {
      let taskDiv = e.target.closest(".task");
      let taskNameSpan = taskDiv.querySelector(".taskname");
      let editInput = taskDiv.querySelector(".edit-input");
      let editButton = taskDiv.querySelector(".edit");

      taskNameSpan.innerText = editInput.value;
      taskNameSpan.style.display = "inline-block";
      editInput.style.display = "none";
      saveBtn.style.display = "none";
      editButton.style.display = "inline-block";
    };
  });

  // Task check
  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach((checkBox) => {
    checkBox.onchange = () => {
      checkBox.nextElementSibling.classList.toggle("completed");
      if (checkBox.checked) {
        taskCount -= 1;
      } else {
        taskCount += 1;
      }
      displayCount(taskCount);
    };
  });

  newTaskInput.value = "";
};

addBtn.addEventListener("click", addTask);
addTplace.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

window.onload = () => {
  taskCount = 0;
  displayCount(taskCount);
  newTaskInput.value = "";
};

function momodal_1() {
  document.getElementById("nenmodal-1").classList.toggle("active");
}
function momodal_2() {
  document.getElementById("nenmodal-2").classList.toggle("active");
}
function momodal_3() {
  document.getElementById("nenmodal-3").classList.toggle("active");
}
function momodal_4() {
  document.getElementById("nenmodal-4").classList.toggle("active");
}

//login form
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Hardcoded credentials for demonstration purposes
  const validUsername = "1";
  const validPassword = "1";

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("isAuth", "true");
    window.location.href = "todo.html";
  } else {
    error.style.display = "block";
  }
}
function checkIsAuth(){
  const isAuth=localStorage.getItem("isAuth")==="true";
  if(!isAuth){
    window.localStorage.href="login.html";
  }
}
window.onload=checkIsAuth;
  
function logout() {
  localStorage.setItem("isAuth", "false");
  window.location.href = "login.html";
}

// Attach logout event handler
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}

