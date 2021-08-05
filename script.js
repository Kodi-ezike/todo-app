const dark = document.getElementById('dark');
const light = document.getElementById('light');
const mobile = window.matchMedia( "(max-width: 600px)" );
function lightMode(){
        document.documentElement.setAttribute('data-theme', 'light');
        light.style.display = 'none';
        dark.style.display = 'block';
        if(mobile.matches){
            document.getElementById('background').src = './images/bg-mobile-light.jpg' 
        }
        else{
            document.getElementById('background').src = './images/bg-desktop-light.jpg' 
        }
};
function darkMode(){
        document.documentElement.setAttribute('data-theme', 'root');
        dark.style.display = 'none';
        light.style.display = 'block';
        if(mobile.matches){
            document.getElementById('background').src = './images/bg-mobile-dark.jpg' 
        }
        else{
            document.getElementById('background').src = './images/bg-desktop-dark.jpg' 
        }
};




const inputBox = document.getElementById("todo-input");
const todoList = document.querySelector('.task-section');
const checkboxes = document.getElementById('task-check');
const task = document.getElementById('task-result');
const pendingTasksNumb = document.querySelector(".pendingNumber");

inputBox.addEventListener("keyup", function(event) {
   
    if (event.code === 'Enter') {
        //event.preventDefault();
        //document.querySelector('.input-heading').submit();
        let userEnteredValue = inputBox.value; //getting input field value
        let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
        if(getLocalStorageData == null){ //if localstorage has no data
            listArray = []; //create a blank array
        }
        else if(getLocalStorageData != null){
            listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
        }
        
        const text = inputBox.value.trim();
        if (text !== '') {
            listArray.push(userEnteredValue); //pushing or adding new value in array
            localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
            show(text);
            inputBox.value = '';
        }
        
    }
    
});

function show(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){ //if localstorage has no data
        listArray = []; //create a blank array
    }else{
        listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
    }
    
    let newList = '';
    listArray.forEach((element, index) => {
        newList += `<li class="new-task">
        <input type="checkbox" id="task-check" name="task-check" onclick="selectTask(${index})" >
        <label for="check-task"></label>
        <p id="task-result">${element}</p>
        <span id="close-icon" onclick="deleteTask(${index})" ><img src="./images/icon-cross.svg" alt="cross" id="close"></span>
      </li>`;
    });
    todoList.innerHTML = newList;
}

function selectTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.valueOf(index); //delete or remove the li
    pendingTasksNumb = listArray.length;
    //localStorage.setItem("New Todo", JSON.stringify(listArray));
    show(); //call the showTasks function
}

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    show(); //call the showTasks function
}

