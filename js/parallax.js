// window.requestAnimationFrame = window.requestAnimationFrame
//  || window.mozRequestAnimationFrame
//  || window.webkitRequestAnimationFrame
//  || window.msRequestAnimationFrame
//  || function(f){setTimeout(f, 1000/60)}

var image = document.getElementById('image')
var title = document.getElementById('title')
var nav = document.getElementById('nav')
var par = document.getElementById('par')

function parallaxNav(scrolltop){
 navDiv.style.bottom = scrolltop * 3 + 'px'
 nav.style.opacity = scrolltop / 600
 par.style.opacity = 1 - (scrolltop / 100 )

}

function titleStyle(scrolltop){
  if(scrolltop > 150){
    title.style.opacity = 0
  }
  else{
   title.style.opacity = 1
  }
}
function pictureMove(scrolltop){
  var pic = document.getElementById('pic')
  pic.style.left = (15 - (scrolltop / 20)) + '%'
  pic.style.height = (66 - (scrolltop/ 5)) + '%'
  pic.style.bottom = (15 - (scrolltop/ 20)) + '%'
}

window.addEventListener('scroll', function(){
  var scrolltop = window.pageYOffset
  parallaxNav(scrolltop)
  pictureMove(scrolltop)
  titleStyle(scrolltop)
}, false)


