const response = fetch('./js/info.json')
    .then((info) => {
        const data = info.json();
    })

function returnvalue() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === data.username && password === data.password) {
        console.log("logged in")
        let head = document.querySelector(".sts");
        head.innerHTML = "Unlocked";
    }
}

