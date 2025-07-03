document.body.style.backgroundImage =  "url('stars.jpg')"
document.body.style.backgroundSize = "cover"
document.body.style.backgroundRepeat = "no- repeat"
document.body.style.backgroundPosition = "center"




// Container
let container = document.createElement("div")
container.setAttribute("id", "container")
document.body.append(container)


//Container Styling
container.style.display = "flex"
container.style.alignItems = "center"
container.style.justifyContent = "center"

// Main
let main = document.createElement("div")
main.setAttribute("id", "main")
container.appendChild(main)
main.style.borderRadius = "30px"

// Main Styling

main.style.maxHeight = "500px"
main.style.width = "350px"
main.style.background = "rgba(255, 255, 255, 0.1)"; 
main.style.backdropFilter = "blur(10px)";
main.style.border = "1px solid rgba(255, 255, 255, 0.3)";
main.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
main.style.borderRadius = "15px";
main.style.padding = "20px";


// Name
let name = document.createElement("h1")
name.innerText = "What's up, Ab Aqeel!"
main.appendChild(name)


// Nmae Styling 
name.style.fontFamily = "arial,bold"


// toady
let today = document.createElement("h2")
today.innerText = "today's tasks"
main.appendChild(today)


// Today Styling
today.style.fontFamily = "arial"
today.style.textTransform = "uppercase"

// Add Button
let addBtn = document.createElement("button")
addBtn.innerText = "+"
main.appendChild(addBtn)

// Button Styling
addBtn.style.height = "50px"
addBtn.style.width = "50px"
addBtn.style.borderRadius = "50%"
addBtn.style.border = "none"
addBtn.style.float = "right"
addBtn.style.marginTop = "19rem"
addBtn.style.marginRight = "30px"
addBtn.style.fontSize = "3rem"
addBtn.style.display = "flex"
addBtn.style.alignItems = "center"
addBtn.style.justifyContent = "center"



// Input
let input = document.createElement("input")
input.setAttribute("type", "text")
input.style.display = "none"
today.appendChild(input)


//Input Styling
input.style.height = "20px"
input.style.borderRadius = "10px"
input.style.border = "none"
input.style.fontSize = "14px"


// Add task button
let addTask = document.createElement("button")
addTask.innerText = "Add task"
addTask.display = "none"




// Add task Button Styling
addTask.style.marginLeft = "190px";
addTask.style.position = "relative";
addTask.style.marginTop = "20px";
addTask.style.backgroundColor = "greenYellow"
addTask.style.padding = "9px"
addTask.style.border = "none"
addTask.style.borderRadius = "20px"




// Add Task Container
let addTaskContainer = document.createElement('div')
addTaskContainer.style.position = "relative";
addTask.style.marginLeft = "190px";
addTask.style.marginTop = "-50px";



// Ordered List
let ol = document.createElement("ol")
main.append(ol)














addBtn.addEventListener("click", function () {
    addBtn.addEventListener("click", function () {
        // ✅ Append only if not already added
        if (!main.contains(addTask)) {
            today.appendChild(addTask)
        }

        if (!main.contains(input)) {
            main.appendChild(input);
        }

        // ✅ Show and enable both
        addTask.style.display = "block";
        addTask.removeAttribute("disabled");

        input.style.display = "block";
        input.removeAttribute("disabled");
    });

    input.value = ""


})


addTask.addEventListener("click", function () {
    let li = document.createElement("li");
    ol.appendChild(li);
    li.innerText = input.value;

    addTask.setAttribute("disabled", "");
    addTask.style.display = "none";

    input.setAttribute("disabled", "");
    input.style.display = "none";










    //remove
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "❌";
    removeBtn.style.marginLeft = "10px";

    removeBtn.addEventListener("click", () => li.remove());

    li.appendChild(removeBtn);
    ol.appendChild(li);

    addTask.setAttribute("disabled", "");
    addTask.style.display = "none";

    input.setAttribute("disabled", "");
    input.style.display = "none";
});











