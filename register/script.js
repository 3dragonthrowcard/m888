let USER_DATABASE = JSON.parse(localStorage.getItem("USER_DATABASE")) || [
    {id:1,username:"Kktan88",password:"596596"},
    {id:2,username:"jy007",password:"Abc123"}
]

function register(){
    const phone = document.getElementById("userInput").value
    const name = document.getElementById("nameInput").value
    const password = document.getElementById("passwordInput").value
    const newId = USER_DATABASE.length + 1

    const newUser = {
        id:newId, 
        phone:phone,
        name:name,
        password:password,
    }

    // check phone Number
    const userExist = USER_DATABASE.find((data=>data.phone == phone))
    console.log("UE",userExist)
    if(userExist){
        alert("Phone Exist")
    }
    else{
        USER_DATABASE.push(newUser)
        localStorage.setItem("USER_DATABASE",JSON.stringify(USER_DATABASE))
        console.log(USER_DATABASE)

        createPlayer(name,password)

        alert("success")
    }
        


}

async function createPlayer(name,password){
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "op": "mega",
         "mem": name,
         "pass": password,
         "sign": "d214ef246fee62848987916d155c094b"
       });
       
       let response = await fetch("https://api.easytogo123.com/createplayer", { 
         method: "POST",
         body: bodyContent,
         headers: headersList,
         mode: "no-cors"
       });
       
       let data = await response.text();
       console.log(data);
       
}

