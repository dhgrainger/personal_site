// window.requestAnimationFrame = window.requestAnimationFrame
//  || window.mozRequestAnimationFrame
//  || window.webkitRequestAnimationFrame
//  || window.msRequestAnimationFrame
//  || function(f){setTimeout(f, 1000/60)}



function parallaxNav(scrolltop){
  if (scrolltop < 221 ){
    navDiv.style.bottom = scrolltop / 2.6 + '%'
    nav.style.opacity = scrolltop / 400
    par.style.opacity = 1 - (scrolltop / 221 )
  }
  else{
    navDiv.style.bottom = 85 + '%'
    par.style.opacity = 0
    nav.style.opacity = 1
  }
}

function titleStyle(scrolltop){
  var title = document.getElementById('welcome')
  var navDiv = document.getElementById('navDiv').style.bottom

  title.style.bottom = (55 - (scrolltop/2.6)) + '%'

  if(scrolltop > 80){
    title.style.opacity = 0
  }
  else{
    title.style.opacity = 1
  }
}

function pictureMove(scrolltop){
  var pic = document.getElementById('pic')
  if (scrolltop < 221 ){
    pic.style.left = (15 - (scrolltop / 15.8)) + '%'
    pic.style.height = (66 - (scrolltop/ 5)) + '%'
    pic.style.bottom = (15 - (scrolltop/ 20)) + '%'
  }
  else{
    pic.style.left = '1%'
    pic.style.height = '22%'
    pic.style.bottom = '4%'
  }
}

function divMove(scrolltop){
  var video = document.getElementById('video')
  var title = document.getElementById('content')
  var navDiv = parseFloat(document.getElementById('navDiv').style.bottom)
  title.innerHTML = video.style.height
  if (scrolltop < 224 ){
  video.style.top = 100 - (scrolltop / 2.6) + '%'
  video.style.height = 50 + (scrolltop / 6.3) + '%'
  }
  else{
    video.style.top = '15%'
    video.style.height = '85%'
  }
}


window.addEventListener('scroll', function(){
  var scrolltop = window.pageYOffset
  parallaxNav(scrolltop)
  pictureMove(scrolltop)
  titleStyle(scrolltop)
  divMove(scrolltop)
}, false)


