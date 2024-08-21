// const USER_DATABASE = [
//     {id:1,username:"Kktan88",password:"596596"},
//     {id:2,username:"jy007",password:"Abc123"}
// ]

// let loginUser = null

// function login(){
//     const username = document.getElementById("usernameInput").value
//     const password = document.getElementById("passwordInput").value
//     if(username == USER_DATABASE[0].username){

//         if(password == USER_DATABASE[0].password){
//             loginUser = USER_DATABASE[0]
//             console.log("success")
//         }

//         else{
//             console.log("Incorrect Password")
//         }
//     }
//     else{
//         console.log("User does not exist")
//     }

// }

let USER_DATABASE = JSON.parse(localStorage.getItem("USER_DATABASE")) 
let loginUser = null

function login(){
    const phone = document.getElementById("phoneInput").value
    const password = document.getElementById("passwordInput").value

    // find username
    const userExist = USER_DATABASE.find((data=>data.phone == phone))
    console.log(userExist)

    if(userExist){
        if(password == userExist.password){
            loginUser = userExist
            alert("user login successfully")
            }
        else{
            alert("incorrect password")
            }
        }
            
        
        else{
            alert("User does not exist")
        }

}

