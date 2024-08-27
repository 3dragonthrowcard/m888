
async function transfer(){
    const amount = document.getElementById("amount").value
    
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify({
     "op": "mega",
     "prod": 16,
     "ref_no": "Dep000001",
     "amount": amount,
     "mem": "Kktan88",
     "pass": "596596",
     "sign": "5d77e60cb3c5503aee093d758a396d40"
   });
   console.log(bodyContent)
   let response = await fetch("https://api.easytogo123.com/deposit", { 
     method: "POST",
     body: bodyContent,
     headers: headersList,
     mode:"no-cors"
   });
   
   let data = await response.text();
   console.log(data);
   alert("success transfer")

}


async function withdraw(){
    const amount = document.getElementById("amount").value
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "op": "mega",
         "prod": 16,
         "ref_no": "WIT000001",
         "amount": amount,
         "mem": "Kktan88",
         "pass": "596596",
         "sign": "6cc9ee2b6ac1a1991c4dd61799833059"
       });
       
       let response = await fetch("https://api.easytogo123.com/withdraw", { 
         method: "POST",
         body: bodyContent,
         headers: headersList,
              mode:"no-cors"
       });
       
       let data = await response.text();
       console.log(data);
       alert("withdraw success")

    
}



async function seeBalance(){
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "op": "mega",
         "prod": 16,
         "mem": "Kktan88",
         "pass": "596596",
         "sign": "992b15da707e9319e52aa9326607d16a"
       });
       
       let response = await fetch("https://api.easytogo123.com/balance", { 
         method: "POST",
         body: bodyContent,
         headers: headersList,
             mode:"no-cors",
       });
       
       let data = await response.text();
       console.log(data);
       
    
}

async function loadImg(){
  const allImg = document.getElementById("allImgId")
  const imgName = JSON.parse(localStorage.getItem("imgId"))
  
  // allImg.src = `../assets/"Mega.png"`
  allImg.src = `../assets/${imgName}`
  // console.log(imgName)
}


// async function loadImg(){
// // document.getElementById("allimgId").src = `../assets/${localStorage.getItem("imgId")}`
// }