// Write your JS here.
let moleHead = document.getElementsByClassName("mole-head")
console.log(moleHead)

function getRandom() {
    let min = Math.ceil(0)
    let max = Math.floor(7)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        popUpRandonMole(getRandom())
    }, 1000);

    for (let ele of moleHead) {
        ele.addEventListener("click", () => {
            ele.classList.add("hide-head")
         })   
    }
}); 

function popUpRandonMole(num) {
    let mole = moleHead[num];
    mole.classList.remove('hide-head')
    setTimeout(() => {
        return hideMole(num);
    }, 3000);
}

function hideMole(num) {
    let mole = moleHead[num];
    mole.classList.add("hide-head")
    setTimeout(() => {
        popUpRandonMole(getRandom())
    }, 1000);
}
