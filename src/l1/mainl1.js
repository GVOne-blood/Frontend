
var notify = document.querySelector('#notify')
var www = document.querySelectorAll('.itemVal')
var listTask = []

function validateInput(content){
    console.log(tasks)
    if (content == null || content.length < 3) {
    //var keyword = document.getElementById('keyword').value

                if (listTask.includes(content))
                    {  notify.textContent = 'This task already exists '
                        return false}
        console.log(listTask)
        notify.textContent = 'Invalid input ';
        return false;
    }
    // Ẩn notify khi hợp lệ
    notify.textContent = '';
    return true;
}

function addNewItem(){
    var tasks = document.getElementById('tasks');
    var content = document.getElementById('search_inp').value;
    if (!validateInput(content)){
        console.log("invalid input")
        return;
    }
    var li = document.createElement('li');
    var div = document.createElement('div');
    var p = document.createElement('p');
    p.className = 'itemVal';
    p.textContent = content;
    div.appendChild(p);
    li.appendChild(div);
    // Gán sự kiện hover cho li mới
    li.addEventListener('mouseenter', displayDetele);
    li.addEventListener('mouseleave', hideDelete);
    tasks.appendChild(li);
    document.getElementById('cnt_task').textContent = tasks.children.length;
    document.getElementById('search_inp').value = ''
}

var deleteHtml = `<div class="delete"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></div>`;

function displayDetele(event) {
    const li = event.currentTarget;
    if (!li.querySelector('.delete')) {
        const delDiv = document.createElement('div');
        delDiv.className = 'delete';
        delDiv.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>';
        delDiv.onclick = function(e) {
            e.stopPropagation();
            li.remove();
            document.getElementById('cnt_task').textContent = document.querySelectorAll('#tasks li').length;
        };
        li.appendChild(delDiv);
    }
}

function hideDelete(event) {
    const li = event.currentTarget;
    const delIcon = li.querySelector('.delete');
    if (delIcon) {
        delIcon.remove();
    }
}

// Gán sự kiện cho tất cả li khi DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#tasks li').forEach(function(li) {
        li.addEventListener('mouseenter', displayDetele);
        li.addEventListener('mouseleave', hideDelete);
    });
});
function search(ev) {
    var keyword = document.getElementById('keyword').value.trim().toLowerCase();
    var tasks = document.querySelectorAll('#tasks li');
    var found = false;

    tasks.forEach(function(li) {
        var text = li.querySelector('.itemVal').textContent.toLowerCase();
        if (text.includes(keyword)) {
            li.style.display = '';
            found = true;
        } else {
            li.style.display = 'none';
        }
    });

    if (!found) {
        notify.textContent = 'No task found';
    } else {
        notify.textContent = '';
    }
}
function clearAll(event) {
    var tasks = document.getElementById('tasks');
    tasks.innerHTML = '';
    document.getElementById('cnt_task').textContent = '0';
}

function onDragHandle(event){
    event.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
            ev.dataTransfer.setDragImage(ev.target,0,0);
            
            return true;
}
function onDrop(event){

}