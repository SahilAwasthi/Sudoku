
for(i = 0;i<=9;i++)
{
	document.getElementById("b"+i).addEventListener("click",clicked);
}

for(i = 0;i<81;i++)
{
	document.getElementById(i).addEventListener("click",getvalue);
}

var currvalue = 0;

function clicked()
{
	document.getElementById("b"+currvalue).style.backgroundColor = "white";

	currvalue = this.id[1];
	this.style.backgroundColor = "orange";
	
}

function getvalue()
{
	if(currvalue != 0)
	this.value = currvalue;
	else
	this.value = "";
}