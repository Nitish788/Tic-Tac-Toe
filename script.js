const boxes = document.querySelectorAll(".box");
const boxText = document.querySelectorAll(".boxtext");
let turn = "X";

const wins = () => {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((i) => {
    if (
      boxText[i[0]].innerText === boxText[i[1]].innerText &&
      boxText[i[1]].innerText === boxText[i[2]].innerText &&
      boxText[i[0]].innerText !== ""
    ) {
      console.log("uihjljlklkopo");
    }
  });
};

boxes.forEach((box, i) => {
  box.addEventListener("click", () => {
    if (turn === "X" && boxText[i].innerText === "") {
      turn = "0";
      boxText[i].innerText = "X";
    } else if (turn === "0" && boxText[i].innerText === "") {
      turn = "X";
      boxText[i].innerText = "0";
    }
    wins();
  });
});
