var screen = document.querySelectorAll(".screen")
var startBtn = document.querySelector("button")
var nun  =document.querySelectorAll(".elem")
var playground = document.querySelector(".playground")

startBtn.addEventListener("click",function(){
    screen[1].style.transform = "translateY(-100%)"
})
nun.forEach(function (elem){
    elem.addEventListener("click",function(){
        screen[2].style.transform ="translateY(-200%)"
        selected = elem.childNodes[3].getAttribute("src")
        var newImg = document.createElement("img")
        var x =  Math.random()*100
        var y =  Math.random()*100
        var rot =  Math.random()*360
        newImg.setAttribute("src",selected)
        newImg.style.left = x+"%"
        newImg.style.top = y+"%"
        newImg.style.rotate = rot+"deg"
        playground.appendChild(newImg)
        
    })
})






// var btn = document.querySelector("button")
// var screen = document.querySelectorAll(".screen")
// var allElems = document.querySelectorAll(".elem")
// var img = document.querySelectorAll("img")

// btn.addEventListener("click",function(){
//     screen[1].style.transform = "translateY(-100)"

//     allElems.forEach(function(elem){
//         elem.addEventListener("click",function(){
//             screen[2].style.transform = "translateY(-200%)"

//         })
//     })
// })





