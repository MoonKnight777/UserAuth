
function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    console.log(cookieArr);
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        return cookiePair[1];
    }
}
let f = getCookie();
console.log(f);



fetch('https://jsonplaceholder.typicode.com/users')
    .then((info) => {
        const data = info.json();
        return data;
    })
    .then((data) => {
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
        infoname.innerHTML = `Name : ${data[f].name}`
        infousername.innerHTML = `Username : ${data[f].username}`
        infoemail.innerHTML = `E-mail : ${data[f].email}`
        infostreet.innerHTML = `Street : ${data[f].address.street}`
        infosuite.innerHTML = `Suite : ${data[f].address.suite}`
        infocity.innerHTML = `City : ${data[f].address.city}`
        infopincode.innerHTML = `Zipcode : ${data[f].address.zipcode}`
        infophone.innerHTML = `Phone : ${data[f].phone}`
        infoweb.innerHTML = `Website : ${data[f].website}`
    })
