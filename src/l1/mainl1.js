
var notify = document.querySelector('#notify')
var tasks = document.getElementById('tasks');
Sortable.create(tasks, {
    animation: 150
});
var listTask =tasks


function validateInput(content){
    console.log(content)
    if (content == null || content.length < 3) {
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

function clearAll(event) {
    var tasks = document.getElementById('tasks');
    tasks.innerHTML = '';
    document.getElementById('cnt_task').textContent = '0';
}