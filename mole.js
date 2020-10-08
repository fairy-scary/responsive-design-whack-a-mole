// Write your JS here.
let moleHead = document.getElementsByClassName("mole-head")
console.log(moleHead)


function getRandom() {
    let min = Math.ceil(0)
    let max = Math.floor(7)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('DOMContentLoaded', () => {
    let mole = getRandom();
    setTimeout(() => {
        popUpRandonMole(mole)
    }, 1000);
});

function popUpRandonMole(list) {
    let mole = getRandom();
    for (let i = 0; i < list.length; i++) {
        if (list[i] === list[mole]) {
            moleHead.classList.remove('hide-head')
        }
    }
    setTimeout(() => {
        return hideMole(mole);
    }, 1000);
}

function hideMole(ele) {
    let mole = getRandom()
    moleHead.classList.add("hide-head")
    setTimeout(() => {
        return popUpRandonMole(mole)
    }, 1000);
}


    //molehead - is this the list we can pull an index from
    //Math.random() //equal a variable to use again
    //for loop, let i equal the var
    //make a var out of list[i] - that var
    //remove classname of hidehead




// calculate a random number between zero and seven, inclusive
// use that random number as the index of the list that you got for the mole head elements
// remove the --hidden Modifier CSS class from the mole head element
// set a timeout for one second to call another function named hideMole with the mole head element that you already selected
