
	
	var main = document.getElementById("main");
	var lunbo = document.getElementById("luobo");
	var list = document.getElementById("list");
	var list_img = list.getElementsByTagName("img");
	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var alpha = 0;
	var zidong;
	var timer;
	var isDrag = false;
	var index = 1;

	
	function showImg(count){
		isDrag = true;
		for(var i = 0; i < list_img.length; i++){
			list_img[i].style.opacity = 0;
		}
		
		timer = setInterval(function(){
			alpha += 2;
			console.log(alpha);
			list_img[count-1].style.opacity = alpha / 100;
			if(alpha == 100)
			{
				isDrag = false;
				alpha = 0;
				clearInterval(timer);
			}
		},20);
		
	}
	showImg(index);
	
	function showButton(){
		for(var i = 0; i < buttons.length; i++ )
		{
			if(buttons[i].className == "on")
			{
				buttons[i].className = "";
			}
		}
		buttons[index - 1].className = "on";
	}
	
	
	for(var i = 0; i < buttons.length; i++)
	{
		buttons[i].onclick = function(){
			if(!isDrag){
				if(this.className == "on")
					return;
				else{
					index =  parseInt(this.getAttribute("index"));
					showImg(index);
					showButton();
				}
			}
		}
	}
	
	
	
	
	next.onclick = function(){
		if(!isDrag){
			
			if(index == 4)
			{
				index = 1;
			}
			else{
				index += 1;
			}
			showImg(index);
			showButton();
		}
	}
	
	
	prev.onclick = function(){
		if(!isDrag){
			
			if(index == 1)
			{
				index = 4;
			}
			else{
				index -= 1;
			}
			showImg(index);
			showButton();
		}
	}
	
	function play(){
		zidong = setInterval(next.onclick,2000);
	}
	function stop(){
		clearInterval(zidong);
	}
	play();
	
	lunbo.onmouseover = function(){
		stop();
	}
	lunbo.onmouseout = function(){
		play();
	}
	
	
	
	

