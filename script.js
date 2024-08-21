function launchGame(prodId){
    alert(`Game Product ${prodId}`)

    localStorage.setItem("prodId",JSON.stringify(prodId))
    window.location.replace("http://127.0.0.1:5500/megaweb/current-game/index.html")
}