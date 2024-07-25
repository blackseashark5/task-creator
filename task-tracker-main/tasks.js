const tasksoutputs = document.getElementsByClassName("tasksoutput")[0];

const getTask = (type = "all") => {
    const allTask = (type.toLocaleLowerCase() == "all") ?
        JSON.parse(localStorage.getItem("Tasks"))
        : JSON.parse(localStorage.getItem("Tasks")).filter(
            (task) => task.status.toLowerCase() == type.toLowerCase()
        );
    toDom(allTask);
}

const toDom = (filteredTask = null) => {
    try {
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
            tasksoutputs.innerHTML = output;
        } else {
            tasksoutputs.innerHTML = "no Tasks";
        }
    } catch (error) {
        console.log(error.message);
    }
}

getTask();