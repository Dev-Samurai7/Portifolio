const github = document.getElementById("github");
const linkdin = document.getElementById("linkedin");
const instagram = document.getElementById("instagram")
const ulrGit = "https://github.com/Dev-Samurai7"
const urlLink = "https://www.linkedin.com/in/joselourenco-ti/"
const urlInsta = "https://www.instagram.com/joselourenco_s7/"


// Função pra abrir as paginas das redes socias

// GItHUb
function openGit(){
    const git = window.open(ulrGit, "_black")
  
}
github.addEventListener("click", () => {
    openGit(ulrGit)
})

// Linkdin

function openLink(){
    const link = window.open(urlLink, "_black")
  
}

linkdin.addEventListener("click", () => {
    openLink(urlLink)
})

// Instagram
function openLink(){
    const insta = window.open(urlInsta, "_black")
  
}

instagram.addEventListener("click", () => {
    openLink(urlInsta)
})