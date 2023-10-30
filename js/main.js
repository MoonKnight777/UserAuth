

// function returnvalue() {

//     fetch('./js/info.json')
//         .then((info) => {
//             return info.json();
//         })
//         .then((data) => {


//             if (username === data.username && password === data.password) {
//                 console.log("logged in")
//                 let head = document.querySelector(".sts");
//                 head.innerHTML = "Unlocked";
//             }
//         })
// }

function logincheck() {

    fetchdata()
        .then((data) => {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            for (i = 0; i < data.length; i++) {
                if (username === data[i].email && password === data[i].name.replace(" ", '')) {
                    console.log("logged in")
                    let head = document.querySelector(".sts");
                    head.innerHTML = "Unlocked";
                    userentered();
                    break;
                }
                else {
                    console.log("Loginfailed")
                    continue;
                }
            }
        })
}

async function fetchdata() {

    const fetchedinfo = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await fetchedinfo.json();
    return data;

}

function userentered() {

    fetchdata()
        .then((data) => {
            let info = document.querySelector(".info");
            let infoname = document.querySelector(".info_name");
            let infousername = document.querySelector(".info_username");
            let infoemail = document.querySelector(".info_email");
            let infostreet = document.querySelector(".address_street");
            let infosuite = document.querySelector(".address_suite");
            let infocity = document.querySelector(".address_city");
            let infopincode = document.querySelector(".address_pincode");
            let infophone = document.querySelector(".info_phone");
            let infoweb = document.querySelector(".info_web");
            let container = document.querySelector(".container");
            container.style.display = "none";
            info.style.display = "block";
            infoname.innerHTML = data[i].name
            infousername.innerHTML = data[i].username
            infoemail.innerHTML = data[i].email
            infostreet.innerHTML = data[i].address.street
            infosuite.innerHTML = data[i].address.suite
            infocity.innerHTML = data[i].address.city
            infopincode.innerHTML = data[i].address.zipcode
            infophone.innerHTML = data[i].phone
            infoweb.innerHTML = data[i].website

            return console.log("userdatafn")
        })
}
