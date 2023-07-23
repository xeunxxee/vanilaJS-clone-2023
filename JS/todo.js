const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list")

let todos = [];

const TODOS_KEY = ("todos");

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); /* todo array 전체의 just boring string화 */
}

function handleTodoSubmit(event) {
    event.preventDefault(); 
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObject = {
        text: newTodo,
        id: Date.now()
    }
    todos.push(newTodoObject);
    paintTodo(newTodoObject);
    saveTodos();
}

function paintTodo(newTodoObject) {
    const li = document.createElement("li");
    li.id = newTodoObject.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    li.appendChild(span); 
    li.appendChild(button); /* append는 가장 뒤에 추가됨 */
    todoList.appendChild(li);
    span.innerText = newTodoObject.text;
    button.addEventListener("click", deleteTodoListItem);
}

function deleteTodoListItem(event) {
    const deletedLi = event.target.parentElement;
    todos = todos.filter(todo => todo.id !== parseInt(deletedLi.id));
    deletedLi.remove();
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY); /* array */

if (savedTodos != null) {
    const paresedTodos = JSON.parse(savedTodos);
    paresedTodos.forEach(paintTodo);
    todos = paresedTodos; /* 덮어쓰기를 방지 ... 기존에 있던 item들(parsedTodos)을 todos로 수정함 */
} else {
    
}
