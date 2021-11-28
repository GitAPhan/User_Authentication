// login success function
function login_success(response) {
    var login_status = document.getElementById('login_status');
    login_status.innerText = "login successful!";
    Cookies.set('login_token', response.data.token);
    window.location.href = "/pages/home.html";
}

// login failure function
function login_failure(error) {
var login_status = document.getElementById('login_status');
login_status.innerText = "login failed! Please try again.";
}

// axios function to request to verify user
function login_request(event) {
    var login_status = document.getElementById('login_status');
    login_status.innerText = "LOADING . . .";

    var login_email = event.path[1][0].value;
    var login_password = event.path[1][1].value;

    axios.request({
        url: "https://reqres.in/api/login",
        method: "POST",
        data: {
            email: login_email,
            password: login_password
        }
    }).then(login_success).catch(login_failure);
}

// add event to login button
var login_button = document.getElementById('login_submit');
login_button.addEventListener('click', login_request);