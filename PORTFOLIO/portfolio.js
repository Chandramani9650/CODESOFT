let about = document.getElementById("about")
let skills = document.getElementById("skills")
let services = document.getElementById("services")
let experience = document.getElementById("Experience")
let education = document.getElementById("Education")
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")

a.addEventListener('click',function(){
    experience.style.opacity = "0"

    skills.style.opacity = "1"
    education.style.opacity = "0"
})
b.addEventListener('click',function(){
    experience.style.opacity = "1"
    skills.style.opacity = "0"
    education.style.opacity = "0"
    experience.style.marginTop = "-20%"
})
c.addEventListener('click',function(){
    education.style.opacity = "1"
    skills.style.opacity = "0"
    experience.style.opacity = "0"
    education.style.marginTop = "-25%"
   
})