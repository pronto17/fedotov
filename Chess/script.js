function createBoard(C = 8, R = 8, collWidth = 100, rowHeight = 100) {
  let colors = ["#FAEBD", "#5F9EA0"];

  let box = document.createElement("div");

  let attr1_box = document.createAttribute("class");
  let attr2_box = document.createAttribute("id");
  attr1_box.value = "gameBoard";
  box.attributes.setNamedItem(attr1_box);
  attr2_box.value = "gameBoard";
  box.attributes.setNamedItem(attr2_box);

  document.body.appendChild(box);

  document.getElementById("gameBoard").style.width = (C*(collWidth+2)) + "px";
  document.getElementById("gameBoard").style.height = (R*(rowHeight+2)) + "px";

  let c = 0;
  for(let cell = 0; cell < (C * R); cell++) {
    let miniBox = document.createElement("div");

    let attr1_miniBox = document.createAttribute("class");
    attr1_miniBox.value = "gameCell";
    miniBox.attributes.setNamedItem(attr1_miniBox);

    let attr2_miniBox = document.createAttribute("onclick");
    attr2_miniBox.value = "turn(this)";
    miniBox.attributes.setNamedItem(attr2_miniBox);

    if((cell + 1) % C != 0) {c = 1 - c;}
    miniBox.style.width = collWidth + "px";
    miniBox.style.height = rowHeight + "px";
    miniBox.style.backgroundColor = colors[c];

    document.getElementById("gameBoard").appendChild(miniBox);
  }

  let figures = ["Rook","Knight","Bishop","King","Queen","Bishop","Knight","Rook","Pawn","Pawn","Pawn","Pawn","Pawn","Pawn","Pawn","Pawn"];

  if(Math.floor(Math.random() * 2)) {
    for(let new_chess = 0; new_chess < R * 2; new_chess++) {
      document.getElementById("gameBoard").childNodes[new_chess % (R * 2)].style.backgroundImage="url(fedotov/chess/w"+figures[new_chess % (R * 2)]+".svg)";
    }
    for(let new_chess = (R * C) - (R * 2); new_chess < R * C; new_chess++) {
      document.getElementById("gameBoard").childNodes[new_chess].style.backgroundImage="url(fedotov/chess/b"+figures[(new_chess + 8) % (R * 2)]+".svg)";
    }
  } else {
    for(let new_chess = 0; new_chess < R * 2; new_chess++) {
      document.getElementById("gameBoard").childNodes[new_chess % (R * 2)].style.backgroundImage="url(fedotov/chess/b"+figures[new_chess % (R * 2)]+".svg)";
    }
    for(let new_chess = (R * C) - (R * 2); new_chess < R * C; new_chess++) {
      document.getElementById("gameBoard").childNodes[new_chess].style.backgroundImage="url(fedotov/chess/w"+figures[(new_chess + 8) % (R * 2)]+".svg)";
    }
  }
}
function turn(cell) {

}
