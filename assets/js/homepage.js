var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var getUserRepos = function (user) {
    // format the github api URL
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the URL
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
};

var formSubmitHandler = function (event) {
    event.preventDefault();
    console.log(event);
}

userFormEl.addEventListener("submit", formSubmitHandler);