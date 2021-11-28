// success function for creating color cards
function color_success(response) {
    console.log(response);
    var color_container = document.getElementById('color_container');

    for (var i = 0; i < response.data.data.length; i++) {
        var color_card = document.createElement('div');
        color_card.style.backgroundColor = response.data.data[i].color;

        var color_name = document.createElement('h4');
        color_name.innerText = response.data.data[i].name;
        color_card.appendChild(color_name);

        var color_code = document.createElement('h6');
        color_code.innerText = response.data.data[i].color;
        color_card.appendChild(color_code);

        var color_year = document.createElement('p');
        color_year.innerText = response.data.data[i].year;
        color_card.appendChild(color_year);

        color_container.appendChild(color_card);
    }
}

// function to logout
function logout() {
    Cookies.remove('login_token');
}

// failure function for creating color cards
function color_failure(error) {
    var status_message = document.getElementById('status_message');
    status_message.innerText = "We seem to have ran into a problem. Please refresh and try again.";
}

    var back_link = document.createElement('a');
    back_link.href = "/index.html";
    document.body.appendChild(back_link);

// conditional to display page if there is a login token
if (Cookies.get('login_token') == undefined) {
    var welcome_message = document.getElementById('welcome_message');
    welcome_message.innerText = "You are not logged in. Please got back and sign in to continue";
    back_link.innerText = "Click here to go back!";

} else {
    // add logout button. User to be sent to login page 
    back_link.innerText = "Logout";
    back_link.addEventListener('click', logout);

    axios.request({
        url: "https://reqres.in/api/unknown"
    }).then(color_success).catch(color_failure);
}