const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const addUserBtn = document.getElementById("addUser");
const tbody = document.getElementById("tbody");
const updateUserBtn = document.getElementById("updateUser");
const delBtn=document.getElementById("delUser");
const to_id=document.getElementById("El_id");
let id;
let firstName1;
let lastName1;
let currentUser = '';
function User(ids, fname, lname){
    this.id = ids;
    this.firstName1 = fname;
    this.lastName1 = lname;
}
let user1 = new User(0, "Rupesh", "Surya");
let user2 = new User(1, "Pranjal", "Sakale");
let user3 = new User(2, "Mohit", "Yadav");
let user4 = new User(3, "Ankur", "Aariya");
let user5 = new User(4, "Romit", "Gandhi");
let user6 = new User(5, "Ravindra", "Singh");
let user7 = new User(6, "Smit", "Panchal");
let user8 = new User(7, "Nill", "Da");
let user9 = new User(8, "Ankit", "Rajput");
let user10 = new User(9, "Mahi", "Dhoni");
let user11 = new User(10, "Viru", "Da");
let user12 = new User(11, "Pinki", "suryawa");
let user13 = new User(12, "Ravi", "Bhai");
let user14 = new User(13, "Aaditya", "Gupta");
let user15 = new User(14, "Manu", "Ragh");
let user16 = new User(15, "Alam", "Khan");
let user17 = new User(16, "Ali", "Khan");


// console.log(user1);

let users_one = [user1, user2, user3, user4, user5, user6, user7,user8, user9, user10,user11,user12,user13,user14,user15,user16,user17];
function showUserTable(){
    tbody.innerHTML = '';
    let id=0;
    let j=0;
    for(let i=0;i<users_one.length;i++){
        tbody.innerHTML += `<tr>
        <th class="active">
            <input type="checkbox" class="select-all checkbox" name="select-all" value="data"onclick="data(${id})" />
        </th>
        <td>${users_one[i].firstName1}</td>
        <td>${users_one[i].lastName1}</td>
        <td><button type="button" class="btn btn-success" onclick="edit(${i})">Edit</button><td>
        <td><button class="btn btn-danger" onclick="deleteUser(${id})">Delete</button></td>
      </tr>`;
      id++;
      j++;
    }

}
let array_id=[]
function data(id){
    delBtn.disabled=false;
    array_id.push(id);
    let lan=array_id.length;
to_id.innerHTML=`<span>total ${lan} rows Select</span>`
}
function saveUser(){
    if(firstName.value.trim() == ''||lastName.value.trim() ==  ''){
        alert("Provide First Name & Last Name");
        return 0;
    }
    let x = users_one.length;
    let userObj = new User(`${x}`, firstName.value, lastName.value);
    users_one.push(userObj);
    firstName.value = '';
    lastName.value = '';
    showUserTable();
}
addUserBtn.addEventListener("click",function(){
    saveUser();
})
function updateUser(){
    users_one[currentUser].firstName1 = firstName.value;
    users_one[currentUser].lastName1 = lastName.value;
    addUserBtn.style.display = "initial";
    updateUserBtn.style.display = "none";
    showUserTable();
    firstName.value='';
    lastName.value ='';
}
function edit(i){
    firstName.value = users_one[i].firstName1;
    lastName.value = users_one[i].lastName1;
    addUserBtn.style.display = "none";
    updateUserBtn.style.display = "initial";
    currentUser = i;
}
updateUserBtn.addEventListener("click", function(){
    updateUser();
})
delBtn.addEventListener("click",function(){
    deleteUser(array_id);
})
    showUserTable();
function deleteUser(i){
    users_one.splice(i,1);
    showUserTable();
}
