const formtask = document.querySelector(".form-task");

    formtask.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputform = document.querySelector(".input-form");
    console.log(inputform.value);

    const wraperlist = document.querySelector(".task-list-wrapper");

    const tasklist = document.createElement("li");

    tasklist.innerHTML = inputform.value;

    wraperlist.append(tasklist);
});