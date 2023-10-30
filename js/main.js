
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
            // let info = document.querySelector(".info");
            let infoname = document.querySelector(".info_name");
            let infousername = document.querySelector(".info_username");
            let infoemail = document.querySelector(".info_email");
            let infostreet = document.querySelector(".address_street");
            let infosuite = document.querySelector(".address_suite");
            let infocity = document.querySelector(".address_city");
            let infopincode = document.querySelector(".address_pincode");
            let infophone = document.querySelector(".info_phone");
            let infoweb = document.querySelector(".info_web");
            // let container = document.querySelector(".container");
            infoname.innerHTML = `Name : ${data[i].name}`
            infousername.innerHTML =`Username : ${data[i].username}`
            infoemail.innerHTML = `E-mail : ${data[i].email}`
            infostreet.innerHTML = `Street : ${data[i].address.street}`
            infosuite.innerHTML = `Suite : ${data[i].address.suite}`
            infocity.innerHTML = `City : ${data[i].address.city}`
            infopincode.innerHTML = `Zipcode : ${data[i].address.zipcode}`
            infophone.innerHTML = `Phone : ${data[i].phone}`
            infoweb.innerHTML =  `Website : ${data[i].website}`
            window.location.href = "/UserAuth/user.html"
        })
}
