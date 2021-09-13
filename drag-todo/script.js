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
