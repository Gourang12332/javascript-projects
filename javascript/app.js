let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let newgame = document.querySelector(".newgame");
let reset = document.querySelector(".reset");
let move0 = true;
let part = document.querySelector(".part");
const winpatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (move0) {
            box.innerText = "O";
            move0 = false;
        } else {
            box.innerText = "X";
            move0 = true;
        }
        box.style.pointerEvents = "none";
        let isWinner = checkWinner();
        if (isWinner) {
            showWinner(isWinner);
        }
    });
});

let enableBoxes = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.style.pointerEvents = "auto"; // Re-enable pointer events
    }
}

const resetGame = () => {
    move0 = true;
    enableBoxes();
    msg.classList.add("hide");
}

let disableBoxes = () => {
    for (let box of boxes) {
        box.style.pointerEvents = "none";
    }
}

let showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            return val1; // Return the winner
        }
    }
    return null; // Return null if no winner
}

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
