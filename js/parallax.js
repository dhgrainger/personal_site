
// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

var navy = document.getElementById('navy')
var image = document.getElementById('image')


var scrollheight = document.body.scrollHeight // height of entire document
var windowheight = window.innerHeight // height of browser window

function parallaxbubbles(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
 navy.style.top = scrolltop * 1 + 'px' // move bubble1 at 20% of scroll rate
 image.style.bottom = scrolltop * 3 + 'px' // move bubble2 at 50% of scroll rate
 navy.style.opacity = scrolltop / 384
 // image.style.opacity = scrolltop / 384
}

window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)


