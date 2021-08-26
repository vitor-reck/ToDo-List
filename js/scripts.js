// Variáveis globais
const btn = document.querySelector(".btn-add")
const task = document.querySelector(".task-input")
const task_array = []

// Evento de click no Botão ADD
btn.addEventListener("click", function (e) {
    // Criando variável index(task_array), selecionando a div(.task-list) e criando os elementos HTML: ul, li e button
    {
        var div = document.querySelector(".task_list")
        var ul = document.createElement("ul")
        var li = document.createElement("li")
        var remove_btn = document.createElement("button")
            remove_btn.innerText = "X"
        var index
    }
    
    // Prevenção de envio do input
    e.preventDefault()

    // Verificação de tasks repetidas/vazias
    authenticateValues()
    
    // Estilizando a task e button
    {
        li.style.width = "175px"
        li.style.padding = "3px"
        li.style.fontSize = "1.3rem"
        li.style.borderRadius = "3px"
        li.style.cursor = "pointer"
        
        remove_btn.style.width = "32.5px"
        remove_btn.style.padding = "3px"
        remove_btn.style.backgroundColor = "lightsalmon"
        remove_btn.style.cursor = "pointer"
    }

    // ------------------ FUNÇÕES ------------------
    
    function authenticateValues() {
        // Validação de valores vazios
        if (String(task.value).trim() == "") {
            alert("Digite uma tarefa!")
            
            clearInput()

            return false
        }
        else {
            // Verificando se é o primeiro valor inserido
            if (task_array.length == 0) {
                div.append(ul)
                li.innerText = task.value
                ul.append(li, remove_btn)
        
                task_array.push(String(task.value).toLowerCase())
                
                clearInput()
            }
            else {
                // Verificando se o array contém valor do input
                if (task_array.includes(String(task.value).toLowerCase())) {
                    alert("Tarefa repetida!")

                    clearInput()
                        
                    return false
                }
                else {
                    div.append(ul)
                    li.innerText = task.value
                    ul.append(li, remove_btn)
    
                    task_array.push(String(task.value).toLowerCase())

                    clearInput()
                }
            }
        }
    }

    // Clear input e foco no campo
    function clearInput() {
        task.value = ""
        task.focus()
    }

    // Estilizando a task quando há evento de click(tarefa concluída)
    li.onclick = () => {
        if(remove_btn.innerText === "X") {
            li.style.backgroundColor = "lightgray"
            li.style.textDecoration = "line-through"
            remove_btn.style.backgroundColor = "green"
            remove_btn.innerText = "✔"
        }
        else {
            li.style.backgroundColor = "white"
            li.style.textDecoration = "none"
            remove_btn.innerText = "X"
            remove_btn.style.backgroundColor = "lightsalmon"
        }
    }
    
    // Botão para remover task(confirme com ✔ em condicional)
    remove_btn.onclick = () => {
        if(remove_btn.innerText == "✔" && confirm("Deseja excluir a tarefa?")) {
            // Verificando os valores dentro da array para remoção
            if (task_array.includes(String(li.innerText).toLowerCase())) {
                ul.remove(ul.lastElementChild)

                index = task_array.indexOf(String(li.innerText).toLowerCase())
                task_array.splice(index, 1)

                return false
            }
        }
        else if(remove_btn.innerText == "X"){
            ul.remove(li.lastElementChild)
            
            index = task_array.indexOf(String(li.innerText).toLowerCase())
            task_array.splice(index, 1)
        }
        // Cancelar exclusão da tarefa
        else {
            return false
        }
    }
})