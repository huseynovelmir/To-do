window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector(".tasks");



    form.addEventListener('submit', (e) => {
        e.preventDefault()


        const task = input.value;


        if (!task) {
            alert("please add a task")
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("tasks-div");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.append(task_content_el);

        const task_cbox = document.createElement("input");
        task_cbox.classList.add("cbox");
        task_cbox.type = "checkbox";

        task_content_el.append(task_cbox);




        task_cbox.addEventListener("click", () => {
            if (task_cbox.checked) {
                task_cbox.nextElementSibling.classList.add('italic')
                task_cbox.nextElementSibling.classList.remove('normal')


            } else {
                task_cbox.nextElementSibling.classList.add('normal')
                task_cbox.nextElementSibling.classList.remove('italic')




            }

        });




        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");

        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.append(task_input_el)


        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit")
        task_edit_el.innerHTML = "Edit"


        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete")

        task_delete_el.addEventListener("click", () => {
            task_delete_el.parentElement.parentElement.remove()
        })

        const icon = document.createElement("i")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-trash")


        task_delete_el.append(icon)

        task_actions_el.append(task_edit_el);
        task_actions_el.append(task_delete_el);

        task_el.append(task_actions_el);


        list_el.append(task_el)

        input.value = ""

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save"
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit"
            }


        })


        let form = document.querySelector('form');
        let ls = localStorage.getItem('todo');
        let text = document.getElementsByClassName('text')
        let todo = ls ?JSON.parse(ls):[0];
        form.addEventListener('click', () => {
            e.preventDefault();
            let inpdata = form[0].value;
            todo.push(inpdata)
            localStorage.setItem('todo',JSON.stringify(todo))
            
        })

         
        
    })


})