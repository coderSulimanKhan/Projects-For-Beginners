const newTodoText = document.querySelector("#todoTextInput");
const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", () => {
    const todoText = newTodoText.value;
    const newTodoDiv = document.createElement("div");
    const parentDiv = document.querySelector(".myAllTodos");
    newTodoDiv.classList.add("todo");
    newTodoDiv.innerHTML = `<h1 id="todoText">${todoText}</h1><button id="delete">Delete</button>`;
    parentDiv.append(newTodoDiv);
});

const list = document.querySelector(".myAllTodos");

list.addEventListener("click", (e) => {
    e.target.closest(".todo").remove();
});
