'use strict';

let taskCounter = 0;

let selectedTask;

let completedTasks = [];

function addTask() {

    let deleteBtn = document.getElementById('deleteButton');

    let taskDate = document.getElementById('dateEdit').value;
    let taskStr = document.getElementById('taskEdit').value;
    let taskText = taskStr + "                                        " + taskDate;

    let taskDiv = (taskCounter == 0) ? document.getElementById('buttonBlock') : document.getElementById('buttonBlock0');

    let div = taskDiv.cloneNode(true);
    div.innerHTML = taskText;
    div.id = "buttonBlock" + taskCounter;
    div.className = "add_content";

    document.body.appendChild(div);


    var buttons = document.getElementById('buttonBlock' + taskCounter);

    console.log(buttons);

    buttons.onclick = function(e) {

        for (let i = 0; i < taskCounter; i++) {

            if (document.getElementById('buttonBlock' + i) != undefined && document.getElementById('buttonBlock' + i).style.backgroundColor !== 'rgba(138, 255, 83, 0.5)' && document.getElementById('buttonBlock' + i).style.backgroundColor !== 'rgba(138, 255, 83, 0.7)' && document.getElementById('buttonBlock' + i).style.backgroundColor !== 'rgba(255, 73, 73, 0.5)') {

                document.getElementById('buttonBlock' + i).style.backgroundColor = 'rgba(256, 256, 256, 0.5)';
            }

            if (document.getElementById(e.target.id).style.backgroundColor == 'rgba(138, 255, 83, 0.7)') {

                document.getElementById(e.target.id).style.backgroundColor = 'rgba(138, 255, 83, 0.5)';
            }
        }


        if (document.getElementById(e.target.id).style.backgroundColor != 'rgba(138, 255, 83, 0.5)' && document.getElementById(e.target.id).style.backgroundColor !== 'rgba(255, 73, 73, 0.5)') {

            document.getElementById(e.target.id).style.backgroundColor = 'rgba(256, 256, 256, 0.7)';
            selectedTask = document.getElementById(e.target.id);
        } else {

            selectedTask = document.getElementById(e.target.id);
        }
    }

    hideButton.onclick = function() {

        //let j = 0;
        for (let j = 0; j < completedTasks.length; j++) {
            for (let i = 0; i < taskCounter; i++) {

                if (completedTasks.length != 0 && document.getElementById('buttonBlock' + i) != undefined) {

                    if (document.getElementById('buttonBlock' + i).id == completedTasks[j]) {
                        document.getElementById('buttonBlock' + i).style.display = 'none';

                    }
                }
            }
        }
    };

    showButton.onclick = function() {


        for (let j = 0; j < completedTasks.length; j++) {
            for (let i = 0; i < taskCounter; i++) {

                if (completedTasks.length != 0 && document.getElementById('buttonBlock' + i) != undefined) {

                    if (document.getElementById('buttonBlock' + i).id == completedTasks[j]) {
                        document.getElementById('buttonBlock' + i).style.display = 'block';

                    }
                }
            }
        }
    };



    deleteBtn.onclick = function() {

        let del = 0;
        let count;

        let task;

        if (selectedTask !== undefined)
            selectedTask.remove();
    };

    doneButton.onclick = function() {

        if (completedTasks.length == 0) {

            console.log(selectedTask.id);
            completedTasks.push(selectedTask.id);
            selectedTask.style.backgroundColor = 'rgba(138, 255, 83, 0.5)';
        } else {
            for (let j = 0; j < completedTasks.length; j++) {

                if (selectedTask.id == completedTasks[j]) {

                    console.log(selectedTask[j]);
                    completedTasks.splice(j, 1);
                    selectedTask.style.backgroundColor = 'rgba(256, 256, 256, 0.5)';
                    break;
                } else {

                    console.log(selectedTask[j]);
                    completedTasks.push(selectedTask.id);
                    selectedTask.style.backgroundColor = 'rgba(138, 255, 83, 0.5)';
                    break;
                }
            }
        }
    };

    var today = new Date();

    today.getTime();

    if (completedTasks.length == 0) {

        for (let i = 0; i < taskCounter; i++) {

            var time = Date.parse(document.getElementById('buttonBlock' + i).innerHTML);

            console.log(time);
            console.log(today);

            if (time < today) {

                document.getElementById('buttonBlock' + i).style.backgroundColor = 'rgba(255, 73, 73, 0.5)';

            }
        }
    } else {

        for (let j = 0; j < completedTasks.length; j++) {

            for (let i = 0; i < taskCounter; i++) {

                if (document.getElementById('buttonBlock' + i).id !== completedTasks[j]) {

                    var time = Date.parse(document.getElementById('buttonBlock' + i).innerHTML);

                    console.log(time);
                    console.log(today);

                    if (time < today) {

                        document.getElementById('buttonBlock' + i).style.backgroundColor = 'rgba(255, 73, 73, 0.5)';

                    }
                }
            }
        }
    }
    taskCounter++;
}

function taskClicked() {

    alert('Clicked!');
}