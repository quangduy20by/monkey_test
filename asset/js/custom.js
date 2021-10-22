var users = [
    {
    
        name: 'Phạm Quang Duy ',
        gender: 'Nam',
        birthdate: '13/02/1998'
    },
    {
        
        name: 'Phạm Quang Duy ',
        gender: 'Nam',
        birthdate: '13/02/1998'
    }

];
var submit = document.getElementById("submit");

var indexUserEdit = -1;
//document readdy
document.addEventListener('DOMContentLoaded', function () {
    renderUsers();
});


// render user
function renderUsers() {
    var html = '';
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        html += '<tr>',
            html += '<th>' + user.name + '</th>';
        html += '<th>' + user.gender + '</th>';
        html += '<th>' + user.birthdate + '</th>';
        html += '<th><button type="button" class="btn btn-info" onclick="onEditUser(' + i + ')">Edit</button></th>';
        html += '<th><button type="button" class="btn btn-danger" onclick="onDeleteUser(' + i + ')">Delete</button></th>';
        html += '</tr>'
    }
    var usersElement = document.getElementById('users-list');
    usersElement.innerHTML = html;

}

//on click to edit user
function onEditUser(index) {
    var user = getUser(index);
    setInputValue('.user-form .name', user.name);
    setInputValue('.user-form .gender', user.gender);
    setInputValue('.user-form .birthdate', user.birthdate);
    indexUserEdit = index;
    submit.value = "Sửa";
}

function getUser(index) {
    return users[index];
}


// set value to input by selector
function setInputValue(selector, value) {
    var element = document.querySelector(selector);
    element.value = value;
}

//on click to delete user
function onDeleteUser(index) {

    if (confirm('Bạn muốn xóa khum???')) {
        if(indexUserEdit === index){
            resetDefaultValue();
        }
        userDelete(index);
        renderUsers();
    }
}

//delete user
function userDelete(index) {
    users.splice(index, 1);
}


// get value from input
function getInputValue(selector) {
    var inputElement = document.querySelector(selector);
    return inputElement.value;
}

function resetDefaultValue(){
    setInputValue('.user-form .name', "");
    setInputValue('.user-form .gender', "");
    setInputValue('.user-form .birthdate', "");
    submit.value = "Thêm";
    indexUserEdit = -1;
}

// on click creat user
function onClickCreateUser() {
    var name = getInputValue('.user-form .name');
    var gender = getInputValue('.user-form .gender');
    var birthdate = getInputValue('.user-form .birthdate');
    if(name.trim() === ""){
        alert("Tên không được trống!");
        return;
    }
    const newUser = {
        name: name,
        gender: gender,
        birthdate: birthdate
    }
    if (indexUserEdit < 0) {
        addUser(newUser);
    }
    else {
        users.splice(indexUserEdit, 1, newUser);
    }
    resetDefaultValue()
    
    // render view
    renderUsers();
}


// add user
function addUser(user) {
    users.push(user);
}