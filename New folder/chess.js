function createBoard(C=8,R=8,collWidth=100,rowHeight=100,){
colors=["#FAEBD7","#5F0AE0"];
var box=document.createElement("div");

var attr1=document.createAttribute("class");
attr1.value="gameBoard";
box.attributes.setNamedItem(attr1);

var attr2=document.createAttribute("id");
attr2.value="gameBoard";
box.attributes.setNamedItem(attr2);

document.body.appendChild(box);
document.getElementById("gameBoard").style.width=(C*(collWidth+2))+"px";
document.getElementById("gameBoard").style.height=(R*(rowHeight+2))+"px";

c=0;
for(i=0;i<(C*R); i++) {
miniBox=document.createElement("div");
attr1=document.createAttribute("class");
attr2=document.createAttribute("onclick");
//attr2=document.createAttribute("onMouseOver");
attr1.value="gameCell";
attr2.value="turn(this)";
//attr2.value="cellHover(this)";
miniBox.attributes.setNamedItem(attr1);
miniBox.attributes.setNamedItem(attr2);
//miniBox.attributes.setNamedItem(attr3);
miniBox.style.width=collWidth+"px";
miniBox.style.height=rowHeight+"px";
miniBox.style.backgroundColor=colors[c];
if((i+1)%C!=0){c=1-c;}
document.getElementById("gameBoard").appendChild(miniBox);
}
fColor=["b","w"];
cf=Math.round(Math.random());
figures=["Rook","Knight","Bishop","King","Queen","Bishop","Knight","Rook","Pawn",
"Pawn","Pawn","Pawn","Pawn","Pawn","Pawn","Pawn"]
for(j=0; j<16; j++) {
document.getElementById("gameBoard").childNodes[j].style.backgroundImage=
"url("+fColor[cf]+figures[j]+".svg)";
}
for(j=48; j<56; j++) {
document.getElementById("gameBoard").childNodes[j+8].style.backgroundImage=
"url("+fColor[1-cf]+figures[j-48]+".svg)";
document.getElementById("gameBoard").childNodes[j].style.backgroundImage=
"url("+fColor[1-cf]+figures[j-40]+".svg)";
}
}
function turn(cell){
for(j=0; j<64; j++) {
document.getElementById("gameBoard").childNodes[j].style.borderColor="gray";
}
cell.style.borderColor="red"
if(cell.style.backgroundImage!=''){
oldBG=cell.style.backgroundImage;
oldCell=cell;
}
if(cell.style.backgroundImage==''){
cell.style.backgroundImage=oldBG;
oldCell.style.backgroundImage='';
oldCell=null;
oldBG='';
	}
}

/*function cellHover(this) {
	for(j=0; j<64; j++){
	document.getElementById("gameBoard").
	}
}*/

//нужно сформулировать правила движения для каждой фигуры