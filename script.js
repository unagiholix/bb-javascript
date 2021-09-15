// querySelectorAll vs. getElementsByClassName
const cards = document.querySelectorAll(".card");
const all_status = document.querySelectorAll(".status");

let draggableTodo = null;

// drag-object define
cards.forEach((card) => {
  card.addEventListener("dragstop", dragStop);
  card.addEventListener("dragstart", dragStart);
});

function dragStart() {
  draggableTodo = this;
  console.log("dragStart");
}

function dragStop() {
  draggableTodo = null;
  console.log("dragStop");
}

// drag-target define
all_status.forEach((status) => {
  // status.addEventListener("dragleave", dragLeave);
  // status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragover", dragOver);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  this.appendChild(draggableTodo);
  console.log("dropped");
}

const modal = document.getElementById("myModal");
const btn = document.getElementById("add_btn");
const close_modal = document.getElementById("close_modal");

// open modal when user click button
btn.onclick = function () {
  modal.style.display = "block";
  console.log("opened");
}

// close modal when user click outside -> dong khi click modal
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
    console.log("closed");
  }
}

let submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", createTodo);
// create new todo
function createTodo () {
  const todo_div = document.createElement("div");
  const para = document.getElementById("inputField").value;
  const txt = document.createTextNode(para); //??

  // manipulate new todo-card
  todo_div.appendChild(txt);
  todo_div.classList.add("card"); // can not inherit the styling of class
  todo_div.setAttribute("draggable", "true");

  // create a card
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.appendChild(span_txt);

  todo_div.appendChild(span);
  backlog.appendChild(todo_div);

  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragstop", dragStop);
}
