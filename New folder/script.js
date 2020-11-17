function createBoard(){
	C=8;collWidth=100;
	R=8;rowHeight=100;
	colors=["#FAEBD7","#5F9EA0"]
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
for (i=0;i<(C*R);i++){
		miniBox=document.createElement("div");
		attr1=document.createAttribute("class");
		attr1.value="gameCell";
		miniBox.attributes.setNamedItem(attr1);
		miniBox.style.width=collWidth+"px";
		miniBox.style.height=rowHeight+"px";
		miniBox.style.background=colors[c];
		if((i+1)%C!=0){c=1-c;} 
		document.getElementById("gameBoard").appendChild(miniBox);
	}
}