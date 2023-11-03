async function fetchdata() {

    const fetchedinfo = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!fetchedinfo.ok) {
        console.error('Failed to fetch data');
    }
    const data = await fetchedinfo.json();
    return data;

}

fetchdata()
    .then((data) => {
        console.log("done")
        document.cookie = `slot=${data.length+10}` ;
        console.log(document.cookie)
        console.log("done")
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

function logincheck() {

    fetchdata()
        .then((data) => {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            for (let i = 0; i < data.length; i++) {
                if (username === data[i].email && password === data[i].name.replace(" ", '')) {
                    console.log("logged in")
                    let head = document.querySelector(".sts");
                    head.innerHTML = "Unlocked";
                    document.cookie = `slot = ${i}`
                    console.log(document.cookie)
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

function userentered() {

    fetchdata()
        .then((data) => {
            window.location.href = "/UserAuth/user.html";
            // window.open("/UserAuth/user.html","_blank")
        })
}
