var header2_daohang = document.getElementById("header2_daohang");
	var bottom_border = header2_daohang.getElementsByTagName("a");
	for(var i = 0; i < bottom_border.length; i++)
	{
		bottom_border[i].onclick = function(){
			for(var i = 0; i < bottom_border.length; i++){
				bottom_border[i].className = "";
			}
			this.className = "daohang_bd";
		}
	}