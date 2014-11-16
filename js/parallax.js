
// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

var image = document.getElementById('image')
var title = document.getElementById('title')
var nav = document.getElementById('nav')
var par = document.getElementById('par')
var pic = document.getElementById('pic')

var scrollheight = document.body.scrollHeight // height of entire document
var windowheight = window.innerHeight // height of browser window

function parallaxnav(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
 image.style.bottom = scrolltop * 3 + 'px' // move bubble2 at 50% of scroll rate

 nav.style.opacity = scrolltop / 600
 par.style.opacity = 1 - (scrolltop / 100 )


 if(scrolltop > 150){
   title.style.opacity = 0
 }
 else{
  title.style.opacity = 1
 }
 pic.style.left = (15 - (scrolltop / 20)) + '%'
 pic.style.height = (66 - (scrolltop/ 5)) + '%'
 // pic.style.width = (30 - (scrolltop/ 40)) + '%'
 pic.style.bottom = (15 - (scrolltop/ 20)) + '%'
}

window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxnav) // call parallaxbubbles() on next available screen paint
}, false)


