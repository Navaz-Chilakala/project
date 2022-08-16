//alert("susmitha");
var start,end;
var ele=document.getElementsByClassName('pswd');
var ch=[];
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
function selectedRange()
{
	var ele=document.getElementsByClassName("pswd");
	//alert(ele[0].value);
	start=ele[0].selectionStart;
	end=ele[0].selectionEnd;
	//alert(start);
	//alert(end);
}
function changeColor(x){
	//var ele=document.getElementById("text");
	//alert("susmitha");
	for(let i=start;i<end;i++)
	{	
		ch[i]=x.id;
	}
	//alert(ch.length);
}
function getArray()
{
	for(let i=0;i<ch.length;i++ )
	{
		document.write(ch[i]);
	}
}
function showText()
{
	ele=document.getElementById("show");
	ele1=document.getElementsByClassName("pswd");
	if(ele.style.display=="none")
	{
		ele.style.display="block";
	}
	else{
		ele.style.display="none";
	}
	ele.style.backgroundColor="white";
	//alert(ch.toString());
	var x="";
	for(let i=0;i<ele1[0].value.length;i++)
	{
		x=x+"<span style=\'color:"+ch[i]+"\'>"+ele1[0].value.substring(i,i+1)+"</span>";
	}
	ele.innerHTML=x;
}
function submitForm()
{
	txt="";
	var ele1=document.getElementsByClassName("pswd");
	for(let i=0;i<ele1[0].value.length;i++)
	{
		txt=txt+ele1[0].value.substring(i,i+1)+colors[ch[i]];

	}
	ele1[0].value=txt;
	ch=[];
}
function selectedRange1()
{
	var ele=document.getElementsByClassName("pswd");
	start=ele[1].selectionStart;
	end=ele[1].selectionEnd;
	//alert(start);
	//alert(end);
}
function showText1()
{
	ele=document.getElementById("show1");
	ele1=document.getElementsByClassName("pswd");
	//alert(ch.toString());
	if(ele.style.display=="none")
	{
		ele.style.display="block";
	}
	else{
		ele.style.display="none";
	}
	ele.style.backgroundColor="white";
	var x="";
	for(let i=0;i<ele1[1].value.length;i++)
	{
		x=x+"<span style=\'color:"+ch[i]+"\'>"+ele1[1].value.substring(i,i+1)+"</span>";
	}
	ele.innerHTML=x;
}
function submitForm1()
{
	txt="";
	var ele1=document.getElementsByClassName("pswd");
	for(let i=0;i<ele1[1].value.length;i++)
	{
		txt=txt+ele1[1].value.substring(i,i+1)+colors[ch[i]];

	}
	ele1[1].value=txt;
	ch=[];
}