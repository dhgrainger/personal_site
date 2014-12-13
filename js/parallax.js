// window.requestAnimationFrame = window.requestAnimationFrame
//  || window.mozRequestAnimationFrame
//  || window.webkitRequestAnimationFrame
//  || window.msRequestAnimationFrame
//  || function(f){setTimeout(f, 1000/60)}



function parallaxNav(scrolltop){
  if (scrolltop < 221 ){
    navDiv.style.bottom = scrolltop / 2.6 + '%'
    nav.style.opacity = scrolltop / 400
    par.style.opacity = 1 - (scrolltop / 200 )
  }
  else{
    navDiv.style.bottom = 85 + '%'
  }
}

function titleStyle(scrolltop){
  var title = document.getElementById('title')
  var welcome = document.getElementById('welcome')

  // welcome.innerHTML = (1-scrolltop/200)

  if(scrolltop > 150){
    title.style.opacity = 0
  }
  else{
    title.style.opacity = 1
  }
}

function pictureMove(scrolltop){
  var pic = document.getElementById('pic')
  if (scrolltop < 221 ){
    pic.style.left = (15 - (scrolltop / 20)) + '%'
    pic.style.height = (66 - (scrolltop/ 5)) + '%'
    pic.style.bottom = (15 - (scrolltop/ 20)) + '%'
  }
  else{
    pic.style.left = 4 + '%'
    pic.style.height = 22 + '%'
    pic.style.bottom = 4 + '%'
  }
}


window.addEventListener('scroll', function(){
  var scrolltop = window.pageYOffset
    parallaxNav(scrolltop)
    pictureMove(scrolltop)
    titleStyle(scrolltop)
}, false)


