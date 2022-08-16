var start,end;
var ele=document.getElementsByClassName('pswd');
var ch=[];
//var touch=-1;
const colors={
	"red":"#ff0000",
	"blue":"#00ff00",
	"green":"#0000ff",
	"pink":"#ff00ff",
	"orange":"#ffA500",
	"purple":"#A020F0",
	"brown":"#964800",
	"yellow":"#ffff00",
	"cyan":"#00ffff"
};
txt="";
function selectedRange(x)
{
	var ele=document.getElementsByClassName("password");
	start=ele[x].selectionStart;
	end=ele[x].selectionEnd;
}
function changeColor(x){
	for(let i=start;i<end;i++)
	{	
		ch[i]=x.id;
	}
	alert(ch.toString());
}
function showText(x,y)
{
	ele=document.getElementById(x);
	ele1=document.getElementsByClassName("password");
	if(ele.style.display=="none")
	{
		ele.style.display="block";
	}
	else{
		ele.style.display="none";
	}
	ele.style.backgroundColor="white";
	var x="";
	for(let i=0;i<ele1[y].value.length;i++)
	{
		x=x+"<span style=\'color:"+ch[i]+"\'>"+ele1[y].value.substring(i,i+1)+"</span>";
	}
	ele.innerHTML=x;
}
function submitForm()
{
	txt="";
	var ele1=document.getElementsByClassName("password");
	for(let i=0;i<ele1[0].value.length;i++)
	{
		txt=txt+ele1[0].value.substring(i,i+1)+colors[ch[i]];

	}
	ele1[0].value=txt;
	alert(ele1[0].value);
	ch=[];
}