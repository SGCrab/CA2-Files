const users = [

    {
        email: "john@gmail.com",
        password: "12345",
        username: "John"
    },

    {
        email: "ethan@gmail.com",
        password: "123",
        username: "Ethan"
    },


];

const loginSubmit = document.getElementById("loginSubmit");

loginSubmit.addEventListener("click", loginUser);

function loginUser() {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const message = document.getElementById("loginMessage");

    const user = users.find(function(u){

        return u.email === email &&
               u.password === password;

    });

    if(user){

        localStorage.setItem("username", user.username);

        showLoggedInUser();

        message.style.color = "lime";

        message.textContent = "Login successful!";

        const modal =
            bootstrap.Modal.getInstance(
                document.getElementById("loginModal")
            );

        modal.hide();

    }

    else{

        message.style.color = "red";

        message.textContent =
            "Incorrect email or password.";

    }

}

function showLoggedInUser(){

    const username =
        localStorage.getItem("username");

    if(!username){

        return;

    }

    document.getElementById("loginArea").innerHTML = `

<div class="dropdown">

<button
class="login btn dropdown-toggle"
data-bs-toggle="dropdown">

${username}

</button>

<ul class="dropdown-menu dropdown-menu-end">

<li>

<a class="dropdown-item"

href="../Pages/Nate pg11 AccStats.html">

Account Stats

</a>

</li>

<li>

<a class="dropdown-item"

href="../Pages/Nate pg10 Code Redeem.html">

Redeem Code

</a>

</li>

<li>

<hr class="dropdown-divider">

</li>

<li>

<a
class="dropdown-item"
href="#"
id="logoutBtn">

Logout

</a>

</li>

</ul>

</div>

`;

    document
    .getElementById("logoutBtn")
    .addEventListener("click", logoutUser);

}

function logoutUser(){

    localStorage.removeItem("username");

    location.reload();

}

showLoggedInUser();