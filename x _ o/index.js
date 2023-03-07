let qu = document.querySelector(".question")
let qus = document.querySelector(".questonh")
let wrapper = document.querySelector(".wrapper")
let parent = document.querySelector(".container")
let body = document.querySelector("body")
let childes = document.querySelectorAll(".childes")
let tt = document.querySelector(".TT")
let btns = document.querySelector(".btns")
let h1 = document.createElement("h1")
let yes = document.querySelector(".yes")
let no = document.querySelector(".no")
let ex = document.querySelector(".ex")
ex.x = true
btns.x = true
tt.x = true
qu.x = true
qus.x = true
yes.x = true
no.x = true
let first
let s
ex.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        alert("valod")
        green = []
        red = []
        draw = []
        x = true
        qu.style.display = "block"
    }
})
yes.addEventListener("click", () => {
    s = true
    qu.style.display = "none"
    wrapper.style.display = "block"
    first = () => {
    let v = 0
    for(let i = 0; i< win.length; i++){
        let click = 0
        let l = childess[0]
        for(let j = 0; j<= win[i].length -1; j++){
            if(i == 7){
               return defaultChild()
            }
            if((l[win[i][j]-1].y)){
                click++
                v++
                continue
            }
                if(!(l[win[i][j]-1].x)){
                click++
            }
            else{
                break
            }
        }
        
        if(click ==3){
            let num = 1
            if(l[win[i][v]-1].y){
               return defaultChild()
            }
            console.log(num);
            let inner = l[win[i][v]-num].innerHTML
            l[win[i][v]-num].innerHTML = `${inner}<h1 class = "ticTac">X</h1>` 
            l[win[i][v]-num].y = num 
            l[win[i][v]-num].x = true
            click = 0
            red.push(+(l[win[i][v] - num].innerHTML[22]))
            x = true
            draw.push(1)
            checkwinner(red)
            return
            }
            v = 0
    }
}
            setTimeout(() => first(), 1000)
    }
)
no.addEventListener("click", () => {
    s = false
    qu.style.display = "none"
    wrapper.style.display = "block"
})
h1.innerHTML = "x"
let childess = [childes]
let y = [childes]
let t = false
let again = document.querySelector(".again")
let message = document.querySelector(".message")
let drawM = document.querySelector(".draw-message")
childes.innerHTML = ""
parent.x = true 
body.x = true
let x = true
let green = []
let red = []
let draw = []
let win = [
    [5,1,9],
    [1,4,7],
    [2,5,8],
    [4,5,6],
    [3,6,9],
    [1,2,3],
    [3,5,7],
    [7,8,9],
]
    

addEventListener("click", (e) => {
    t = true
    if(e.target.x){
        return console.log("you can click only on the specified squares");
    }
    e.target.x = true
    if(x){
        x = false
        let h1 = document.createElement("h1")
        h1.innerHTML = "O"
        h1.className = "ticTac"
        h1.x = true
        e.target.append(h1)
        green.push(+(e.target.innerHTML[22]))
        t = true
        draw.push(1)
        checkwinner(green)
    }
    else{
        let h1 = document.createElement("h1")
        h1.innerHTML = "X"
        h1.className = "ticTac"
        h1.x = true
        e.target.append(h1)
        red.push(+(e.target.innerHTML[22]))
        x = true
        draw.push(1)
        checkwinner(red)
    }
    if(s){
        setTimeout(() => first(), 1000)
    }
    
})
// 
    function defaultChild(){
        for(let i = 0; i<=childess[0].length; i++){
            if(!(childess[0][i].x)){
                let inner = childess[0][i].innerHTML
                childess[0][i].innerHTML = `${inner}<h1 class = "ticTac">X</h1>` 
                red.push(+(childess[0][i].innerHTML[22]))
                childess[0][i].x = true
                x = true
                draw.push(1)
                checkwinner(red)
                break
            }
        }
    }
function checkwinner(arr){
    console.log(arr);
    for(let i = 0; i< win.length; i++){
        let winn = 0
        for(let j = 0; j<= win[i].length; j++){
            if(winn == 3){
                for(let v = 0; v <= win[i].length-1; v++){
                    childess[0][win[i][v]-1].style.background = "linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%))"
                    childess[0][win[i][v]-1].style.border = "solid white"
                }
                winn = 0
                draw = []
            }
            if(draw.length == 9){
                drawM.style.display = "block"
                body.style.backgroundColor = "gray"
                winn = 0
                draw = []
            }
            if(arr.includes(win[i][j])){
                winn++
            }
        }
    }
    if(t){
        t = false
    }
}
addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        resGame()
    }
})
function resGame(){
    let t = 1
    childess[0].forEach(element => {
        element.x = false
        element.y = false
        let h1 = document.createElement("h1")
        h1.innerHTML = t
        h1.className = "different"
        element.innerHTML = ""
        element.append(h1)
        t++
        element.style.background = "white"
        element.style.border = "none"
    });
    green = []
    red = []
    draw = []
    x = true
    if(s){
        setTimeout(() => first(), 1000)
    }
}
