var todoList = document.getElementById("todolist");
var input = document.getElementById("nme");
var description = document.getElementById("description");

var url = "https://api.vschool.io/dylang/todo/";
var form = document.querySelector("form");

var getRequest = axios.get(url);
getRequest
  .then(function(res) {
    console.log(res);
    var todos = res.data;
    todos.forEach(displayTodo);
  })
  .catch(function(err) {
    console.log(err);
  });

function displayTodo(todo) {
  var div = document.createElement("div");
  div.setAttribute("id", "todo");

  var todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todoDiv");
  var todoDivText = document.createElement("div");
  todoDivText.innerHTML = `${todo.title}`;

  var completeBtn = document.createElement("input");
  completeBtn.setAttribute("type", "checkbox");
  completeBtn.setAttribute("class", "checkbox");
  completeBtn.addEventListener("click", handleCheck);

  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "deleteBtn");
  deleteBtn.innerText = "X";
  deleteBtn.id = todo._id;
  deleteBtn.addEventListener("click", handleDelete);

  todoList.appendChild(div);
  div.appendChild(todoDiv);
  todoDiv.appendChild(completeBtn);
  todoDiv.appendChild(todoDivText);
  div.appendChild(deleteBtn);
}

form.addEventListener("submit", handleNewTodo);

function handleNewTodo(e) {
  e.preventDefault();
  var todo = {
    title: input.value,
    description: description.value
  };
  var postRequest = axios.post(url, todo);
  postRequest
    .then(function(response) {
      var recievedTodo = response.data;
      displayTodo(recievedTodo);
    })
    .catch(function(err) {
      console.log(err);
    });
  input.value = "";
  description.value = "";
}

function handleDelete(e) {
  var deleteBtn = this;
  var deleteRequest = axios.delete(url + deleteBtn.id);
  deleteRequest
    .then(function(res) {
      todoList.removeChild(deleteBtn.parentNode);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function handleCheck(e) {
  var input = this.parentNode;
  var box = input.parentNode;
  box.classList.toggle("completed");
  console.log(this);
}

axios
  .delete("https://api.vschool.io/dylang/todo/5ba27b88eec94d291400bbfa")
  .then(function(res) {
    console.log(res);
  });
// var postRequest = axios.post(url, newTodo);

// postRequest.then(function(res) {
//   console.log(res);
// });
