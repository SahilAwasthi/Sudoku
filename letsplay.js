var totalinput = document.getElementsByTagName("input").length;

// adding liseteners to buttons
document.getElementById("reset").addEventListener("click",reset_grid);


document.getElementById("solve").addEventListener("click",solve_sudoku);

function reset_grid()
{
	for(var i = 0;i<totalinput;i++)
	{
		document.getElementById(i).value = "";
	}
}

document.addEventListener("keypress",set_grid);

function set_grid(event)
{
	if(event.key == "q")
	{
		for(var i = 0;i<totalinput;i++)
		{
			document.getElementById(i).value = Math.floor(Math.random()*9) + 1;	
		}
	}
}

var board = new Array(9);
for(var i = 0;i<9;i++)
{
	board[i] = new Array(9);
	for(j = 0;j<9;j++)
	{
		board[i][j] = "";
	}
}

function solve_sudoku()
{
	var isvalid = false,val,x,y,p,q;

	for(var i = 0;i<81;i++)
	{
		val = Number(document.getElementById(i).value);
		p = Math.floor(i/9);
		q = i%9;
		if(val >= 0 && val<= 9)
		{
			board[p][q] = Number(val);
		}
		else
		{
			x = p;
			y = q;
			isvalid = true;
			break;
		}
	}

	if(isvalid == true)
	{		
		x++;
		y++;
		alert("some sudoku values are not the digits between 1 to 9\ncheck value at cell ("+x+","+y+")");
		document.getElementById(i).value = "";
		document.getElementById(i).classList.add("colorRed");

		setTimeout(function(){
			document.getElementById(i).classList.remove("colorRed");
		},1000);

		return;
	}

	if(solve() == false)
	{
		alert("Sudoku can't be solved\n"+"the sudoku is wrong!!!")
		return;
	}

	printgrid();

}

function solve()
{
	var x,y,i,j,complete = true;
	for(i = 0;i<9;i++)
	{
		for(j = 0;j<9;j++)
		{
			if(board[i][j] == 0)
			{
				complete = false;
				x = i;
				y = j;
				break;
			}
		}
		if(complete == false)
			break;
	}

	if(complete == true)
		return true;

	for(i = 1;i<=9;i++)
	{
		if(isValid(x,y,i) == true)
		{
			board[x][y] = Number(i);
			if(solve() == true)
				return true;
			board[x][y] = 0;
		}
	}

	board[x][y] = 0;
	return false;
}

function isValid(x,y,val)
{
	var i,j;
	for(i = 0;i<9;i++)
	{
		if((board[x][i] == val) || (board[i][y] == val))
			return false;
	}

	var row = Math.floor(x/3),col = Math.floor(y/3);
	row *= 3;
	col *= 3;
	for(i = 0;i<3;i++)
	{
		for(j = 0;j<3;j++)
		{
			if(board[row+i][col+j] == val)
				return false;
		}
	}

	return true;
}


function printgrid()
{
	var i,p,q;
	for(i = 0;i<81;i++)
	{
		p = Math.floor(i/9);
		q = i%9;
		document.getElementById(i).value = Number(board[p][q]);
		
	}
}




// for(var i = 0;i<totalinput;i++)
// {
// 	var block = document.getElementsByTagName("input")[i];
// }

// for(var i = 0;i<totalinput;i++)
// {
// 	var block = document.getElementById(i);
// 	block.value = Number(block.id)+1;
// }


