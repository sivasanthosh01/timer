var mseconds=document.getElementById("msec");
var secs=document.getElementById("secs");
var min=document.getElementById("min");
 count=0;
 seconds=0; 
 minute=0;
var startbtn=document.getElementById("startbtn");
var stopbtn=document.getElementById("stopbtn");
var resetbtn=document.getElementById("resetbtn");

// startbtn.addEventListener("click",timer());
// function timer(){
	
// }
	



// stopbtn.addEventListener("click",timer);
	


// resetbtn.addEventListener("click",timer)
	

	
function timestart(){
firstid=setInterval(timer,20);
}
function timestop(){
clearInterval(firstid);
}
function timereset(){
	clearInterval(firstid);
	count=0;
	seconds=0; 
	minute=0;
	mseconds.innerHTML="0"+count;
	secs.innerHTML="0"+seconds;	
	min.innerHTML="0"+minute;
}

function timer(){
	
	if(count<=9){
		mseconds.innerHTML="0"+count;
		count++;
	}
	else if(count<=59){
		mseconds.innerHTML=count;
		count++;
	}
	
	else if(seconds<9){
		count=0;
		seconds++;
		secs.innerHTML="0"+seconds;
		
	}
	else if(seconds<59){
		count=0;
		seconds++;
		secs.innerHTML=seconds;	
	}
	// else if(seconds==59){
		// minute++;
		// min.innerHTML=minute;
	// }
		
	else if(minute<9){
		seconds=0;
		minute++;
		min.innerHTML="0"+minute;
		
	}
	else if(minute<59){
		seconds=0;
		minute++;
		min.innerHTML=minute;
		
	}
	
}
		
	
