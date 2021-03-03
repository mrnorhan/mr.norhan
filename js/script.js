//for PERSONAL INFORMATION
//1st condition when it loads
document.getElementById('header').style.display = "active"
document.getElementById('showHeader').style.background = "#014776"
document.getElementById('showHeader').style.color = "white"
//
document.getElementById('content').style.display = "none"
document.getElementById('content2').style.display = "none"
document.getElementById('page2').style.display = "none"

// const x = document.getElementById('header')
// x.style.display = "block" //this is to show output
//button 1 condition when click
document.getElementById('showHeader').addEventListener('click',function(){
	//for SKILLS and WORK
	document.getElementById('showContent').style.background = "white"
	document.getElementById('showContent').style.color = "black"
	document.getElementById('content').style.display = "none"
	//for CERTIFICATE
	document.getElementById('content2').style.display = "none"
	document.getElementById('content2').style.display = "none"
	document.getElementById('page2').style.display = "none"
	document.getElementById('showContent2').style.background = "white"
	document.getElementById('showContent2').style.color = "#000"
	//for PERSONAL INFORMATION
	document.getElementById('header').style.display = "block"
	document.getElementById('showHeader').style.background = "#014776"
	document.getElementById('showHeader').style.color = "white"
})

//button 2 condition when click
document.getElementById('showContent').addEventListener('click',function(){
	//for PERSONAL INFORMATION
	document.getElementById('showHeader').style.background = "white"
	document.getElementById('showHeader').style.color = "black"
	document.getElementById('header').style.display = "none"
	//for CERTIFICATE
	document.getElementById('content2').style.display = "none"
	document.getElementById('content2').style.display = "none"
	document.getElementById('page2').style.display = "none"
	document.getElementById('showContent2').style.background = "white"
	document.getElementById('showContent2').style.color = "#000"
	//for SKILLS and WORK
	document.getElementById('showContent').style.background = "#014776"
	document.getElementById('showContent').style.color = "white"
	document.getElementById('content').style.display = "block"
})

//button 3 condition when click
document.getElementById('showContent2').addEventListener('click',function(){
	//for PERSONAL INFORMATION
	document.getElementById('showHeader').style.background = "white"
	document.getElementById('showHeader').style.color = "black"
	document.getElementById('header').style.display = "none"
	//for SKILLS and WORK
	document.getElementById('showContent').style.background = "white"
	document.getElementById('showContent').style.color = "black"
	document.getElementById('content').style.display = "none"
	//for CERTIFICATE
	document.getElementById('content2').style.display = "block"
	document.getElementById('page2').style.display = "block"
	document.getElementById('showContent2').style.background = "#014776"
	document.getElementById('showContent2').style.color = "white"
})
