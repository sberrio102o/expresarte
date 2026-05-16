
function toggleMenu(index) {
    const menus = document.getElementsByClassName("myMenu");
    const targetMenu = menus[index];
    const isAlreadyOpen = targetMenu.classList.contains("show");

    for (let i = 0; i < menus.length; i++) {
        menus[i].classList.remove("show");
    }

    if (!isAlreadyOpen) {
        targetMenu.classList.add("show");
    }
}
    

window.onclick = function(event) {
    if (!event.target.onclick || !event.target.onclick.toString().includes('toggleMenu')) {
        var menus = document.getElementsByClassName("myMenu");
        for (var i = 0; i < menus.length; i++) {
            menus[i].classList.remove("show");
        }
    }
}
