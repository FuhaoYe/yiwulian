window.onload = function(){
	var xia_img = document.getElementById("xia_img");
	var pingtai3_img = document.getElementById("pingtai3_img");
	var pingtai1_img = document.getElementById("pingtai1_img");
	var pingtai2_img = document.getElementById("pingtai2_img");
	var pingtai4_img = document.getElementById("pingtai4_img");
	var pingtai5_img = document.getElementById("pingtai5_img");
	var pingtai6_img = document.getElementById("pingtai6_img");
	var pingtai7_img = document.getElementById("pingtai7_img");
	var why_xianshi = document.getElementById("why_xianshi").getElementsByTagName("li");
	
	var speed = 0;
	var speed3 = 0;
	var speed_First = 0;
	var speed_Two = 0;
	var speed_Three = 0;
	
	var timer2;
	var timerImg1;
	var timerImg2;
	var timerImg3;
	var timerImg4;
	var timerImg5;
	
	var timer_Why_First;
	var timer_Why_Two;
	var timer_Why_Three;
	
	var panding = false;
	var panding3 = false;
	
	var panding_first = false;
	var panding_two = false;
	var panding_three = false;
	
	
	
	window.onscroll = function(){
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(t);
		if(t >= 500 && t <= 1400){
			if(!panding){
					show(xia_img);
			}
		
		}
		
		////3333
		if(t >= 1300 && t <= 1950){
			if(!panding3){
				show3(pingtai3_img);
				
				//222
				setTimeout(function(){
					timerImg2 = setInterval(function(){
						pingtai2_img.style.left = parseInt(pingtai2_img.style.left) - 5 + "px";		
						if(parseInt(pingtai2_img.style.left) == 10)
						{
							clearInterval(timerImg2);
						}
					},20)		
				},1000)
				
				//444
				setTimeout(function(){
					timerImg4 = setInterval(function(){
						pingtai4_img.style.right = parseInt(pingtai4_img.style.right) - 5 + "px";		
						if(parseInt(pingtai4_img.style.right) == 10)
						{
							clearInterval(timerImg4);
						}
					},20)
				},1000)
				
				//1111
				setTimeout(function(){
					timerImg1 = setInterval(function(){
						pingtai1_img.style.left = parseInt(pingtai1_img.style.left) - 5 + "px";		
						if(parseInt(pingtai1_img.style.left) == 0)
						{
							console.log("=====000")
							clearInterval(timerImg1);
						}
					},20)
				},1700)
				
				//555
				setTimeout(function(){
					timerImg5 = setInterval(function(){
						pingtai5_img.style.right = parseInt(pingtai5_img.style.right) - 5 + "px";
						pingtai6_img.style.right = parseInt(pingtai6_img.style.right) - 5 + "px";
						pingtai7_img.style.right = parseInt(pingtai7_img.style.right) - 5 + "px";
						if(parseInt(pingtai5_img.style.right) == 0)
						{
							clearInterval(timerImg5);
						}
					},20)
				},1700)


			}
		}
		
		if(t >= 2000 && t <=2600){
			if(!panding_first){
			
				why_First(why_xianshi[0]);
			}
		}
		
		if(t >= 2200 && t <=2800){
			if(!panding_two){
				console.log("进来了");
				why_Two(why_xianshi[1]);
			}
		}
		
		if(t >= 2400 && t <= 3000){
			if(!panding_three){
			
				why_Three(why_xianshi[2]);
			}
		}
		
	}
	
	

	function why_First(obj){
		panding_first = true;
		timer_Why_First = setInterval(function(){
			speed_First += 3;
			obj.style.opacity = speed_First / 100;
			if(speed_First >= 100)
			{
				speed_First = 0;
				clearInterval(timer_Why_First);

			}
		},30)
		
	}
	
	function why_Two(obj){
		panding_two = true;
		timer_Why_Two = setInterval(function(){
			speed_Two += 3;
			obj.style.opacity = speed_Two / 100;
			if(speed_Two >= 100)
			{
				speed_Two = 0;
				clearInterval(timer_Why_Two);

			}
		},30)
		
	}
	
	function why_Three(obj){
		panding_three = true;
		timer_Why_Three = setInterval(function(){
			speed_Three += 3;
			obj.style.opacity = speed_Three / 100;
			if(speed_Three >= 100)
			{
				speed_Three = 0;
				clearInterval(timer_Why_Three);

			}
		},30)
		
	}



	
		
	
	function show(obj){

		panding = true;
		timer2 = setInterval(function(){
			speed += 3;
//			
			obj.style.opacity = speed / 100;
			if(speed >= 100)
			{
				speed = 0;
				clearInterval(timer2);
				console.log("aaaaa");
			}
		},30)
		
	}
	
	
	function show3(obj){
			panding3 = true;
			timerImg3 = setInterval(function(){
			speed3 += 5;
			console.log(speed3);	
			obj.style.opacity = speed3 / 100;
			if(speed3 >= 100)
			{
				zhojianpanding = true;
				console.log(zhojianpanding);
				speed3 = 0;
				clearInterval(timerImg3);
			}
		},30)
		
	}
	

}
