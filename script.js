function launchGame(prodId,imgId){
    alert(`Game Product ${prodId}`)

    localStorage.setItem("prodId",JSON.stringify(prodId))
    localStorage.setItem("imgId",JSON.stringify(imgId))
    // window.location.replace("http://127.0.0.1:5500/megaweb/current-game/index.html") 


}