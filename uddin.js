function dofirst(){
	barSize = 600;
	mymovie = document.getElementById('mymovie');
	playButton = document.getElementById('playbutton');
	bar        = document.getElementById('defaultBar');
	
	progressBar = document.getElementById('progressBar');
	
	playButton.addEventListener('click' , playorpause , false);
	bar.addEventListener('click' , 'clickedBar' , false);
}
function playorpause(){
	if(!mymovie.paused && !mymovie.ended){
		mymovie.pause();
		playButton.innerHTML = 'PLAY';
		window.clearInterval(updateBar);
		
	}else{
		mymovie.play();
		playButton.innerHTML = 'PAUSE';
		updateBar = setInterval(update ,500);
	}
}
function update(){
	if(!mymovie.ended){
		var size = parseInt(mymovie.CurrentTime*barSize/mymovie.duration);
		progressBar.style.width = size + 'px';
		
	}else{
		progressBar.style.width = '0px';
		playButton.innerHTML = 'PLAY';
		window.clearInterval(updateBar);
	}
}
function clickedBar(e){
	if(!mymovie.paused && !mymovie.ended){
		var mouseX = e.pageX-bar.offsetLeft;
		var newtime = mouseX*mymovie.duration/barSize;
		mymovie.CurrentTime = newtime;
		progressBar.style.width = mouseX + 'px';
	}
}
window.addEventListener('load' , dofirst , false);