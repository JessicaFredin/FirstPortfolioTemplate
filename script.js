const menuLinks = document.querySelectorAll("a")


for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", () => {
        menuLinks[i].classList.add("active")

        for(let j = 0; j < menuLinks.length; j++) {
            if(i!= j){
                menuLinks[j].classList.remove("active")
            }
        }
    })


}