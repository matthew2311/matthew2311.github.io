let state = false

function toogleNavbarNav () {
    let nav = document.getElementById('component-2');
    if(state==false){
        nav.style.display = 'flex'
        state = true
    }else if(state==true){
        nav.style.display = 'none'
        state = false
    }
}