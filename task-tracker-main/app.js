let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

let Tasks = []
let tasksCount = 0

const tasksoutput = document.getElementById("tasksoutput")
const insertasks = document.getElementById("insertasks")
const content = document.getElementById("contents")
const title = document.getElementById("title")
const error = document.getElementById("error")
const stats = document.getElementById("status")

function start(){
  hideinsertasks()
  error.innerHTML = ''
}

function hideinsertasks(){
  insertasks.style.display = 'none'
  error.value = ''
  title.value = ''
  content.value = ''
}

function showInsertTasks(){
  insertasks.style.display = 'block'
}

function insert() {
  if((content.value != '') && (title.value != '')) {
      let task = new Task(title.value, content.value, tasksCount + 1);
      Tasks.push(task);
      saveTasks();
      title.value = '';
      content.value = '';
      error.style.color = 'black';
      insertasks.style.display = 'none';
  } else {
      error.innerHTML = 'Invaled Task';
      error.style.color = 'var(--red)';
  }
}

let Task = function(title, content, id, status = 'Pending') {
  this.title = title;
  this.content = content;
  this.id = id;
  this.status = status
  var date = new Date();
  this.d = date.getDate();
  this.m = date.getMonth() + 1;
  this.y = date.getFullYear();
  tasksCount += 1;
}

function saveTasks() {
  for(var i = 0; i < Tasks.length; i++) {
      Tasks[i].id = i + 1;
  }
  localStorage.setItem('Tasks', JSON.stringify(Tasks));
  loadTasks();
}

function loadTasks() {
  let loadedTask = JSON.parse(localStorage.getItem('Tasks'));
  displayTasks();
}

function displayTasks() {
  try {
    let loadedTasks = JSON.parse(localStorage.getItem("Tasks"));
    if (loadedTasks != null || loadedTasks.length > 0) {
      let output = "";

      output += "<div>";

      for (var a = 0; a < loadedTasks.length; a++) {
        output += "<h2 id='heading'>" + loadedTasks[a].status + "</h2>";
        output += "<span>";
        output +=
          '<input class="x-btn" type="button" value="X" onclick="clearTask(' +
          loadedTasks[a].id +
          ');">';
        output += "<h2>" + loadedTasks[a].title + "</h2>";
        output += loadedTasks[a].content;
        output += "<br>" + '<i id="small">' + loadedTasks[a].d + "/" + loadedTasks[a].m + "/" + loadedTasks[a].y + "</i>";
        output += "</span>";
      }
      output += "</div>";
      tasksoutput.innerHTML = output;
    } else {
      tasksoutput.innerHTML = "no Tasks";
    }
  } catch (error) {}

}

function clearTasks() {
   Tasks = []
   localStorage.removeItem('Tasks')
   location.reload()
}

function clearTask(id) {
  var newid = id - 1;
  Tasks.splice(newid, 1);
  saveTasks();
}

function reloadTasks() {
  try {
    let loadtasksafresh = JSON.parse(localStorage.getItem("Tasks"));
    if (loadtasksafresh != null || loadtasksafresh.length > 0) {
      tasksCount = loadtasksafresh.length;
      for (var i = 0; i < loadtasksafresh.length; i++) {
        Tasks.push(loadtasksafresh[i]);
      }
    } else {
      tasksCount = 0;
    }
  } catch (error) {}
}

function changeStatus(statuses){
  // get all task and filter by statuses
  try {
    if (statuses.toLowerCase() == "all") {
      displayTasks();
      return;
    }
    const filteredTask = JSON.parse(localStorage.getItem("Tasks")).filter(task => task.status.toLowerCase() == statuses.toLowerCase());
    if (filteredTask != null || filteredTask.length > 0) {
      let output = "";

      output += "<div>";

      for (var a = 0; a < filteredTask.length; a++) {
        output += "<h2>" + filteredTask[a].status + "</h2>";
        output += "<span>";
        output +=
          '<input class="x-btn" type="button" value="X" onclick="clearTask(' +
          filteredTask[a].id +
          ');">';
        output += "<h2>" + filteredTask[a].title + "</h2>";
        output += filteredTask[a].content;
        output +=
          "<br>" +
          '<i id="small">' +
          filteredTask[a].d +
          "/" +
          filteredTask[a].m +
          "/" +
          filteredTask[a].y +
          "</i>";
        output += "</span>";
      }

      output += "</div>";
      tasksoutput.innerHTML = output;
    } else {
      tasksoutput.innerHTML = "no Tasks";
    }
  } catch (error) {
    console.log(error.message);
  }
}