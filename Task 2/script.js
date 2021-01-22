const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const addUserBtn = document.getElementById("addUser");
const table_body = document.getElementById("tbody");
const updateUserBtn = document.getElementById("updateUser");

let users_one = [];
let currentUser = '';

function showUsersTable(){
    console.log(users_one);
    table_body.innerHTML = '';
    for(let i = 0; i<users_one.length;i++){
        users_one[i].id = i+1;
        table_body.innerHTML += `<tr>
        <td>${users_one[i].firstName}</td>
        <td>${users_one[i].lastName}</td>
        <td><button class="btn btn-success" onclick="edit(${i})">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button></td>
      </tr>`;
    }
}


 
function saveUser(){
    if(firstName.value.trim() == ''||lastName.value.trim() ==  ''){
        alert("Provide First Name & Last Name");
        return 0;
    }
    let userObj = {
        id:'',
        firstName: firstName.value,
        lastName: lastName.value
    };

    users_one.push(userObj);
    firstName.value = '';
    lastName.value = '';
    console.log(users_one);
    showUsersTable();
}

function updateUser(){
    users_one[currentUser].firstName = firstName.value;
    users_one[currentUser].lastName = lastName.value;
    addUserBtn.style.display = "initial";
    updateUserBtn.style.display = "none";
    showUsersTable();
    firstName.value='';
    lastName.value ='';
}

addUserBtn.addEventListener("click",function(){
    saveUser();
})

function edit(i){
    console.log(i);
    firstName.value = users_one[i].firstName;
    lastName.value = users_one[i].lastName;
    addUserBtn.style.display = "none";
    updateUserBtn.style.display = "initial";
    currentUser = i;
}

updateUserBtn.addEventListener("click", function(){
    updateUser();
})

function deleteUser(i){
    users_one.splice(i,1);
    showUsersTable();
}
